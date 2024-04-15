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

  handleBuildClick = (inputsList: XOHLCType[]) => () => {
    inputsList.map(({ o, h, l, c }, index) => {
      inputsList[index].o = o ?? 0;
      inputsList[index].h = h ?? 0;
      inputsList[index].l = l ?? 0;
      inputsList[index].c = c ?? 0;
    });

    this.props.onBuildClick(inputsList);
  };

  render() {
    const { inputsList } = this.state;

    return (
      <>
        {inputsList.map((e, index) => (
          <ChartInputLine data={e} onChange={this.onChange(index)} index={index} key={index} />
        ))}
        <button onClick={this.handleBuildClick(inputsList)} className="chart__button modal-build">
          Build
        </button>
      </>
    );
  }
}

export { ChartInputList };
