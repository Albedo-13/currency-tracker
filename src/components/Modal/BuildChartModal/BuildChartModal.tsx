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
    inputsList.map((input) => {
      input.o = input.o ?? 0;
      input.h = input.h ?? 0;
      input.l = input.l ?? 0;
      input.c = input.c ?? 0;
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

