import { useState, useEffect } from "react";

import "chartjs-adapter-moment";
import { OhlcElement, OhlcController, CandlestickElement, CandlestickController } from "chartjs-chart-financial";
import Chart from "chart.js/auto";
import { Chart as ChartComponent } from "react-chartjs-2";
import currenciesChartData from "../../constants/chartData";
import ModalPortal from "../Modal/ModalPortal";
import Modal from "../Modal/Modal";
import { TXOHLC } from "../../types/types";
import ChartInputList from "../Modal/BuildGraphModal/BuildGraphModal";
import { dateAdapter, randomBar } from "../../utils/chartAdapter";
import { chartDays } from "../../constants/constants";
import ChartFilters from "./ChartFilters/ChartFilters";
import Select from "../Select/Select";
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
  const [selectCurrencyInput, setSelectCurrencyInput] = useState("USD");
  const [chartData, setChartData] = useState<TXOHLC[]>(
    currenciesChartData[selectCurrencyInput as keyof typeof currenciesChartData]
  );

  useEffect(() => {
    setChartData(currenciesChartData[selectCurrencyInput as keyof typeof currenciesChartData]);
  }, [selectCurrencyInput]);

  console.log("selectCurrencyInput", selectCurrencyInput);
  console.log("chartData", chartData);

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

    const newFilteredData = chartData.filter((item) => {
      const date = new Date(item.x as number);
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

      <Select select={selectCurrencyInput} setSelect={setSelectCurrencyInput} />
      {/* TODO: rename usestate */}
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
