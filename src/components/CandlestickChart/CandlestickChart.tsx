import { useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react";

import "chartjs-adapter-moment";
import { OhlcElement, OhlcController, CandlestickElement, CandlestickController } from "chartjs-chart-financial";
import Chart from "chart.js/auto";
import { Chart as ChartComponent } from "react-chartjs-2";
import currenciesChartData from "../../constants/chartData";
import ModalPortal from "../Modal/ModalPortal";
import Modal from "../Modal/Modal";
import { TXOHLC } from "../../types/types";
import ChartInputList from "../Modal/BuildGraphModal/BuildGraphModal";
import { dateAdapter, randomBar, zeroPrefix } from "../../utils/chartAdapter";
import { chartDays } from "../../constants/constants";
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

export default function CandlestickChart() {
  const pickedCurrency = currenciesChartData["USD"]; // TODO: switcher
  const [chartData, setChartData] = useState<TXOHLC[]>(pickedCurrency);

  const [showModal, setShowModal] = useState(false);
  // const [currencyCode, setCurrencyCode] = useState<string>("");

  const handleModalShow = () => {
    setShowModal(true);
    // setCurrencyCode(key);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

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
    for (let i = 0; i < chartDays; i++) {
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

      <button onClick={handleModalShow}>custom data</button>
      {showModal && (
        <ModalPortal
          children={
            <Modal onClose={handleModalClose}>
              <ChartInputList onBuildClick={handleBuildClick} />
            </Modal>
          }
        />
      )}

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
