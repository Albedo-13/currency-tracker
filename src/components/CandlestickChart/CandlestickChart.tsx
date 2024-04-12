import { Component } from "react";

import Chart from "chart.js/auto";
import "chartjs-adapter-moment";
import { CandlestickController, CandlestickElement, OhlcController, OhlcElement } from "chartjs-chart-financial";
import { Chart as ChartComponent } from "react-chartjs-2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import currenciesChartData from "@constants/chartData";
import { chartDays } from "@constants/constants";
import { XOHLCType } from "@types";
import { dateAdapter, randomBar } from "@utils/chartAdapter";
import { shouldDisableScroll } from "@utils/modalHelpers";
import observable from "@utils/toastObserver";
import { ChartInputList } from "../Modal/BuildChartModal/BuildChartModal";
import Modal from "../Modal/Modal";
import ModalPortal from "../Modal/ModalPortal";
import Select from "../Select/Select";
import { ChartFilters } from "./ChartFilters/ChartFilters";
import "./candlestickChart.scss";

Chart.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);

function toastify(data: string) {
  toast.success(data, {
    position: "top-center",
    closeButton: false,
    autoClose: 2000,
  });
}

observable.subscribe(toastify);

type CandlestickChartState = {
  selectCurrencyInput: string;
  chartData: XOHLCType[];
  showModal: boolean;
};

class CandlestickChart extends Component<any, CandlestickChartState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectCurrencyInput: "USD",
      chartData: currenciesChartData["USD"],
      showModal: false,
    };
  }

  componentDidMount() {
    const { selectCurrencyInput } = this.state;
    this.setChartData(selectCurrencyInput);
  }

  componentDidUpdate(_: any, prevState: CandlestickChartState) {
    const { selectCurrencyInput } = this.state;
    if (prevState.selectCurrencyInput !== selectCurrencyInput) {
      this.setChartData(selectCurrencyInput);
    }
    shouldDisableScroll(this.state.showModal);
  }

  setChartData = (currency: string) => {
    const chartData = currenciesChartData[currency as keyof typeof currenciesChartData];
    this.setState({ chartData });
  };

  setSelectCurrencyInput = (value: string) => {
    this.setState({ selectCurrencyInput: value });
  };

  handleModalShow = () => {
    this.setState({ showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  handleRandomClick = () => {
    const { chartData } = this.state;
    const newGeneratedData: XOHLCType[] = [];
    for (let i = chartDays; i > 0; i--) {
      newGeneratedData.push(randomBar(chartData, i, new Date(`2024-04-${i + 1}`), 221.13));
    }

    this.setState({ chartData: newGeneratedData });
  };

  handleFilterClick = (from: number, to: number) => {
    const { chartData } = this.state;
    if (!from || !to) {
      return;
    }

    const newFilteredData = chartData.filter((item) => {
      const date = new Date(item.x as number);
      return date.getTime() >= from && date.getTime() <= to;
    });

    this.setState({ chartData: newFilteredData });
  };

  handleBuildClick = (inputs: XOHLCType[]) => {
    const newChartData = [];

    for (let i = 0; i < inputs.length; i++) {
      let { o, h, l, c }: XOHLCType = inputs[i];
      l = l && h ? (l > h ? h : l) : l;
      newChartData.push({ x: Date.parse(dateAdapter(Date.now() - i * 24 * 60 * 60 * 1000)), o, h, l, c });
    }

    this.setState({ chartData: newChartData });
    this.handleModalClose();
    observable.notify("Chart build successful");
  };

  render() {
    const { selectCurrencyInput, chartData, showModal } = this.state;

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

    return (
      <section className="chart">
        <div className="container">
          <div className="chart-block">
            <Select select={selectCurrencyInput} setSelect={this.setSelectCurrencyInput} />
          </div>
          <div className="chart-block">
            <ChartFilters onFilterClick={this.handleFilterClick} />
          </div>

          <div className="chart-block chart-button-group">
            <button onClick={this.handleModalShow} className="chart-button">
              Custom data
            </button>
            <button onClick={this.handleRandomClick} className="chart-button">
              Random
            </button>
          </div>

          <div className="chart-wrapper">
            <ChartComponent type="candlestick" data={data} options={options} />
          </div>

          {showModal && (
            <ModalPortal
              children={
                <Modal onClose={this.handleModalClose}>
                  <ChartInputList onBuildClick={this.handleBuildClick} />
                </Modal>
              }
            />
          )}
          <ToastContainer theme={localStorage.getItem("currency-tracker-theme") || ""} />
        </div>
      </section>
    );
  }
}

export { CandlestickChart };
