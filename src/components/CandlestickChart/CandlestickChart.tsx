import { useState } from "react";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

import "chartjs-adapter-moment";
import { OhlcElement, OhlcController, CandlestickElement, CandlestickController } from "chartjs-chart-financial";
import Chart from "chart.js/auto";
import { Chart as ChartComponent } from "react-chartjs-2";
import currenciesChartData from "../../constants/chartData";
Chart.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);

// TODO: split to different files
// TODO: chartData in constants: check and replace?
// TODO: split modal content and overlay
// TODO: styles and theme change, theme colors
// TODO: with observer shows toastify about successful chart build

// TOMORROW:
// TODO: caching on the client. Ask how it is done with react query
// TODO: migration to class components
// TODO: Adaptive of all pages

//!
function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function randomBar(target: Record<number, unknown>, index: number, date: Date, lastClose: number) {
  const open = +randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2);
  const close = +randomNumber(open * 0.95, open * 1.05).toFixed(2);
  const high = +randomNumber(Math.max(open, close), Math.max(open, close) * 1.1).toFixed(2);
  const low = +randomNumber(Math.min(open, close) * 0.9, Math.min(open, close)).toFixed(2);

  if (!target[index]) {
    target[index] = {};
  }

  return {
    x: date.valueOf(),
    o: open,
    h: high,
    l: low,
    c: close,
  };
}

type TXOHLC = {
  x?: number;
  o?: number;
  h?: number;
  l?: number;
  c?: number;
};

const zeroPrefix = (value: number) => (value < 10 ? `0${value}` : `${value}`);

const dateAdapter = (value: number | string | Date) => {
  const date = new Date(value);
  return `${zeroPrefix(date.getFullYear())}-${zeroPrefix(date.getMonth() + 1)}-${zeroPrefix(date.getDate())}`;
};

const CHART_DAYS = 14;
//!

export default function CandlestickChart() {
  const pickedCurrency = currenciesChartData["USD"];
  const [chartData, setChartData] = useState<TXOHLC[]>(pickedCurrency);

  const data = {
    datasets: [
      {
        type: "candlestick" as const,
        label: "Candlestick Chart",
        data: chartData,
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
      },
    ],
  };

  function handleRandomClick() {
    const newGeneratedData: { x: number; o: number; h: number; l: number; c: number }[] = [];
    for (let i = 0; i < CHART_DAYS; i++) {
      newGeneratedData.push(randomBar(chartData, i, new Date(`2024-04-${i + 1}`), 221.13));
    }

    console.log(chartData);
    setChartData(newGeneratedData);
  }

  function handleFilterClick(from: number, to: number) {
    if (!from || !to) {
      return;
    }

    const newFilteredData = pickedCurrency.filter((item) => {
      const date = new Date(item.x);
      return date.getTime() >= from && date.getTime() <= to;
    });

    console.log("filtered data", newFilteredData);
    setChartData(newFilteredData);
  }

  function handleBuildClick(inputs: TXOHLC[]) {
    console.log(inputs);
    const newChartData = [];

    for (let i = 0; i < inputs.length; i++) {
      let { o, h, l, c } = inputs[i];
      l = l > h ? h : l;
      newChartData.push({ x: Date.parse(dateAdapter(Date.now() - i * 24 * 60 * 60 * 1000)), o, h, l, c });
    }
    console.log(newChartData);
    setChartData(newChartData);
  }

  return (
    <>
      <ChartFilters onFilterClick={handleFilterClick} />

      <ChartInputList onBuildClick={handleBuildClick} />

      <button onClick={handleRandomClick}>RANDOM</button>
      <div style={{ width: "1000px" }}>
        <ChartComponent type="candlestick" data={data} datasetIdKey="id" />
      </div>
    </>
  );
}

type TChartFiltersProps = { onFilterClick: (from: number, to: number) => void };

const ChartFilters = ({ onFilterClick }: TChartFiltersProps) => {
  const [from, setFrom] = useState<number>(0);
  const [to, setTo] = useState<number>(0);

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<number>>) => {
    const inputDate = new Date(e.target.value);
    const dateString = `${inputDate.getFullYear()}-${zeroPrefix(inputDate.getMonth() + 1)}-${zeroPrefix(
      inputDate.getDate()
    )}`;
    setter(Date.parse(dateString));
  };

  console.log(from, to);
  return (
    <>
      <label>
        from:
        <input type="date" onChange={(e) => handleDateChange(e, setFrom)} />
      </label>
      <label>
        to:
        <input type="date" onChange={(e) => handleDateChange(e, setTo)} />
      </label>
      <button onClick={() => onFilterClick(from, to)}>Filter</button>
    </>
  );
};

type TChartInputListProps = { onBuildClick: (inputs: TXOHLC[]) => void };

const ChartInputList = ({ onBuildClick }: TChartInputListProps) => {
  const [inputsList, setInputsList] = useState<TXOHLC[]>([{}, {}, {}, {}]);

  const onChange = (index: number) => (someNewData: TXOHLC) => {
    const newInputsList = [...inputsList];
    newInputsList[index] = { ...newInputsList[index], ...someNewData };
    setInputsList(newInputsList);
  };

  console.log("inputsList", inputsList);
  return (
    <>
      {inputsList.map((e, index) => (
        <ChartInputLine data={e} onChange={onChange(index)} index={index} key={index} />
      ))}
      <button
        onClick={() => {
          console.log("trying ;(");
          onBuildClick(inputsList);
          console.log("click");
        }}
      >
        Build
      </button>
    </>
  );
};

type TChartInputLineProps = {
  data: TXOHLC;
  onChange: (someNewData: TXOHLC) => void;
  index: number;
};

const ChartInputLine = ({ data, onChange, index }: TChartInputLineProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <>
      <p>{dateAdapter(Date.now() - index * 24 * 60 * 60 * 1000)}</p>
      <ChartInputItem value="o" data={data} onInputChange={handleInputChange} />
      <ChartInputItem value="h" data={data} onInputChange={handleInputChange} />
      <ChartInputItem value="l" data={data} onInputChange={handleInputChange} />
      <ChartInputItem value="c" data={data} onInputChange={handleInputChange} />
    </>
  );
};

type TChartInputItemProps = {
  data: TXOHLC;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const ChartInputItem = ({ data, onInputChange, value }: TChartInputItemProps) => {
  return (
    <label>
      {value}:
      <input value={data[value as keyof TXOHLC] || ""} onChange={onInputChange} name={value} type="number" required />
    </label>
  );
};
