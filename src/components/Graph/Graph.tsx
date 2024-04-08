import { Component } from "react";
import dollar from "/currency-icons/Dollar Icon.svg";
import "./graph.scss";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// // import Chart from 'chart.js/auto'
// import '../../utils/chartjs-chart-financial.js';

// import { Chart } from "chart.js";
// import { Line } from "react-chartjs-2";
// import { OhlcElement, OhlcController, CandlestickElement, CandlestickController } from "chartjs-chart-financial";

import { OhlcElement, OhlcController, CandlestickElement, CandlestickController } from "chartjs-chart-financial";
import Chart from "chart.js/auto"; // Easy way of importing everything
import "../../../public/chartjs-chart-financial";

// ChartJS.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);

// import {
//   elderRay,
//   ema,
//   discontinuousTimeScaleProviderBuilder,
//   Chart,
//   ChartCanvas,
//   CurrentCoordinate,
//   BarSeries,
//   CandlestickSeries,
//   ElderRaySeries,
//   LineSeries,
//   MovingAverageTooltip,
//   OHLCTooltip,
//   SingleValueTooltip,
//   lastVisibleItemBasedZoomAnchor,
//   XAxis,
//   YAxis,
//   CrossHairCursor,
//   EdgeIndicator,
//   MouseCoordinateX,
//   MouseCoordinateY,
//   ZoomButtons,
//   withDeviceRatio,
//   withSize,
// } from "react-financial-charts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  OhlcElement,
  OhlcController,
  CandlestickElement,
  CandlestickController
);

export const options = {
  // type: 'candlestick',
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

// TODO: установить Chart js financial Обычный и смерджить код на фоне

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [50, 10, 20, 10, 30, 15, 40],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [80, 20, 30, 40, 10, 25, 30],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default class Graph extends Component {
  render() {
    return (
      <section className="graph">
        <div className="container">
          <div className="graph-info-wrapper">
            <div className="graph-info-image">
              {/* TODO: change alt tag from input data */}
              <img src={dollar} alt="currency graph info" />
            </div>
            <div className="graph-info-content">
              <p className="graph-info-name">Commercial Dollar</p>
              <p className="graph-info-short">USD</p>
            </div>
          </div>
          <div>{/* <Line options={options} data={data} /> */}</div>
          <div>
            <canvas id="chart"></canvas>
          </div>
        </div>
      </section>
    );
  }
}
