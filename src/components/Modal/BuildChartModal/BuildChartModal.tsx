import "./buildChartModal.scss";

import type { XOHLCType } from "@types";
import { Component } from "react";

import { ChartInputLine } from "./ChartInputLine";

type ChartInputListProps = { onBuildClick: (inputs: XOHLCType[]) => void };

class ChartInputList extends Component<ChartInputListProps> {
  state = {
    inputsList: [{}, {}, {}, {}],
  };

  onChange = (index: number) => (someNewData: XOHLCType) => {
    const { inputsList } = this.state;
    const newInputsList = [...inputsList];
    newInputsList[index] = { ...newInputsList[index], ...someNewData };
    this.setState({ inputsList: newInputsList });
  };

  handleBuildClick = (inputsList: XOHLCType[]) => {
    this.props.onBuildClick(inputsList);
    inputsList.map(({ o, h, l, c }) => {
      o = o ?? 0;
      h = h ?? 0;
      l = l ?? 0;
      c = c ?? 0;
    });
  };

  render() {
    const { inputsList } = this.state;

    return (
      <>
        {inputsList.map((e, index) => (
          <ChartInputLine data={e} onChange={this.onChange(index)} index={index} key={index} />
        ))}
        <button onClick={() => this.handleBuildClick(inputsList)} className="chart-button modal-build">
          Build
        </button>
      </>
    );
  }
}

export { ChartInputList };
