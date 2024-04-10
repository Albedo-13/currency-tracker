import { useState, useEffect } from "react";

import "chartjs-adapter-moment";
import { OhlcElement, OhlcController, CandlestickElement, CandlestickController } from "chartjs-chart-financial";
import Chart from "chart.js/auto";
import { Chart as ChartComponent } from "react-chartjs-2";
import { ToastContainer, toast } from "react-toastify";
import currenciesChartData from "../../constants/chartData";
import ModalPortal from "../Modal/ModalPortal";
import Modal from "../Modal/Modal";
import { TXOHLC } from "../../types/types";
import ChartInputList from "../Modal/BuildChartModal/BuildChartModal";
import { dateAdapter, randomBar } from "../../utils/chartAdapter";
import { chartDays } from "../../constants/constants";
import ChartFilters from "./ChartFilters/ChartFilters";
import Select from "../Select/Select";
import observable from "../../utils/toastObserver";
import "react-toastify/dist/ReactToastify.css";
import "./candlestickChart.scss";

Chart.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);

// TOMORROW:
// TODO: caching on the client. Ask how it is done with react query
// TODO: styles and theme change, theme colors
// TODO: migration to class components
// TODO: Adaptive of all pages

function toastify(data: string) {
  toast.success(data, {
    position: "top-center",
    closeButton: false,
    autoClose: 2000,
  });
}

observable.subscribe(toastify);

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

  const handleModalShow = () => {
    setShowModal(true);
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
        borderColor: "rgba(128, 128, 128, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      yAxes: {
        grid: {
          color: "#A6A6A630",
        },
      },
      xAxes: {
        grid: {
          color: "#A6A6A630",
        },
      },
    },
  };

  function handleRandomClick() {
    const newGeneratedData: TXOHLC[] = [];
    for (let i = chartDays; i > 0; i--) {
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
    handleModalClose();
    observable.notify("Chart build successful");
  }

  return (
    <section className="chart">
      <div className="container">
        <div className="chart-block">
          <Select select={selectCurrencyInput} setSelect={setSelectCurrencyInput} />
        </div>
        <div className="chart-block">
          <ChartFilters onFilterClick={handleFilterClick} />
        </div>

        <div className="chart-block chart-button-group">
          <button onClick={handleModalShow} className="chart-button">✏️Custom data</button>
          <button onClick={handleRandomClick} className="chart-button">🎲Random</button>
        </div>

        <div className="chart-wrapper">
          <ChartComponent type="candlestick" data={data} options={options} />
        </div>

        {showModal && (
          <ModalPortal
            children={
              <Modal onClose={handleModalClose}>
                <ChartInputList onBuildClick={handleBuildClick} />
              </Modal>
            }
          />
        )}
        <ToastContainer theme={localStorage.getItem("currency-tracker-theme") || ""} />
      </div>
    </section>
  );
}
