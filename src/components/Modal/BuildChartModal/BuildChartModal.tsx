import { Component, type ChangeEvent } from "react";
import type { TXOHLC } from "../../../types/types";
import { dateAdapter } from "../../../utils/chartAdapter";
import "./buildChartModal.scss";

type TChartInputListProps = { onBuildClick: (inputs: TXOHLC[]) => void };

class ChartInputList extends Component<TChartInputListProps> {
  state = {
    inputsList: [{}, {}, {}, {}],
  };

  onChange = (index: number) => (someNewData: TXOHLC) => {
    const { inputsList } = this.state;
    const newInputsList = [...inputsList];
    newInputsList[index] = { ...newInputsList[index], ...someNewData };
    this.setState({ inputsList: newInputsList });
  };

  handleBuildClick = (inputsList: TXOHLC[]) => {
    const { onBuildClick } = this.props;
    onBuildClick(inputsList);
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
          🔨Build
        </button>
      </>
    );
  }
}

export default ChartInputList;

type TChartInputLineProps = {
  data: TXOHLC;
  onChange: (someNewData: TXOHLC) => void;
  index: number;
};

class ChartInputLine extends Component<TChartInputLineProps> {
  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    onChange({ [e.target.name]: e.target.value });
  };

  render() {
    const { data, index } = this.props;

    return (
      <div className="modal-input-line">
        <p className="modal-input-line-date">{dateAdapter(Date.now() - index * 24 * 60 * 60 * 1000)}</p>
        <div className="modal-input-group">
          <ChartInputItem value="o" data={data} onInputChange={this.handleInputChange} />
          <ChartInputItem value="h" data={data} onInputChange={this.handleInputChange} />
          <ChartInputItem value="l" data={data} onInputChange={this.handleInputChange} />
          <ChartInputItem value="c" data={data} onInputChange={this.handleInputChange} />
        </div>
      </div>
    );
  }
}

type TChartInputItemProps = {
  data: TXOHLC;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

class ChartInputItem extends Component<TChartInputItemProps> {
  render() {
    const { data, onInputChange, value } = this.props;

    return (
      <label className="modal-label_small">
        {value}:
        <input
          className="modal-input modal-input_small"
          value={data[value as keyof TXOHLC] || ""}
          onChange={onInputChange}
          name={value}
          type="number"
          required
        />
      </label>
    );
  }
}
