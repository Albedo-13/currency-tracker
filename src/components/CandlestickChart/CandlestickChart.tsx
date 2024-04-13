import "chartjs-adapter-moment";
import "react-toastify/dist/ReactToastify.css";
import "./candlestickChart.scss";

import currenciesChartData from "@constants/chartData";
import { chartDays, dayInMs } from "@constants/constants";
import type { XOHLCType } from "@types";
import { dateAdapter, randomBar } from "@utils/chartAdapter";
import { shouldDisableScroll } from "@utils/modalHelpers";
import observable from "@utils/toastObserver";
import Chart from "chart.js/auto";
import { CandlestickController, CandlestickElement, OhlcController, OhlcElement } from "chartjs-chart-financial";
import { Component, ComponentProps } from "react";
import { Chart as ChartComponent } from "react-chartjs-2";
import { toast, ToastContainer } from "react-toastify";

import { ChartInputList } from "../Modal/BuildChartModal/BuildChartModal";
import Modal from "../Modal/Modal";
import ModalPortal from "../Modal/ModalPortal";
import Select from "../Select/Select";
import { ChartFilters } from "./ChartFilters/ChartFilters";

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
  filteredChartData: XOHLCType[];
  showModal: boolean;
};

class CandlestickChart extends Component<ComponentProps<typeof Component>, CandlestickChartState> {
  constructor(props: ComponentProps<typeof Component>) {
    super(props);
    this.state = {
      selectCurrencyInput: "USD",
      chartData: currenciesChartData["USD"],
      filteredChartData: currenciesChartData["USD"],
      showModal: false,
    };
  }

  componentDidMount() {
    const { selectCurrencyInput } = this.state;
    this.setChartData(selectCurrencyInput);
    this.setFilteredChartData(currenciesChartData[selectCurrencyInput as keyof typeof currenciesChartData]);
  }

  componentDidUpdate(_: ComponentProps<typeof Component>, prevState: CandlestickChartState) {
    const { selectCurrencyInput } = this.state;
    if (prevState.selectCurrencyInput !== selectCurrencyInput) {
      this.setChartData(selectCurrencyInput);
      this.setFilteredChartData(currenciesChartData[selectCurrencyInput as keyof typeof currenciesChartData]);
    }
    shouldDisableScroll(this.state.showModal);
  }

  setChartData = (currency: string) => {
    const chartData = currenciesChartData[currency as keyof typeof currenciesChartData];
    this.setState({ chartData });
  };

  setFilteredChartData = (data: XOHLCType[]) => {
    this.setState({ filteredChartData: data });
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

    this.setState({ filteredChartData: newGeneratedData });
    this.setState({ chartData: newGeneratedData });
  };

  handleFilterClick = (from: number, to: number) => {
    const { chartData } = this.state;
    if (!from || !to) {
      return;
    }

    const newFilteredData = chartData.filter((item: XOHLCType) => {
      const date = new Date(item.x as number);
      return date.getTime() >= from && date.getTime() <= to;
    });

    this.setState({ filteredChartData: newFilteredData });
  };

  handleBuildClick = (inputs: XOHLCType[]) => {
    const newChartData = [];

    for (let i = 0; i < inputs.length; i++) {
      let { l }: XOHLCType = inputs[i];
      const { o, h, c }: XOHLCType = inputs[i];
      l = l && h ? (l > h ? h : l) : l;
      newChartData.push({ x: Date.parse(dateAdapter(Date.now() - i * dayInMs)), o, h, l, c });
    }

    this.setState({ chartData: newChartData });
    this.setState({ filteredChartData: newChartData });
    this.handleModalClose();
    observable.notify("Chart build successful");
  };

  render() {
    const { selectCurrencyInput, filteredChartData, showModal } = this.state;

    const data = {
      datasets: [
        {
          type: "candlestick" as const,
          label: "Candlestick Chart",
          data: filteredChartData,
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

          <div className="chart-block chart__button-group">
            <button onClick={this.handleModalShow} className="chart__button">
              Custom data
            </button>
            <button onClick={this.handleRandomClick} className="chart__button">
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
