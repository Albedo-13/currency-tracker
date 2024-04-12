import { dayInMs } from "@/constants/constants";
import { XOHLCType } from "@/types/types";
import { dateAdapter } from "@utils/chartAdapter";
import { Component, type ChangeEvent } from "react";
import { ChartInputItem } from "./ChartInputItem";

type ChartInputLineProps = {
  data: XOHLCType;
  onChange: (someNewData: XOHLCType) => void;
  index: number;
};

class ChartInputLine extends Component<ChartInputLineProps> {
  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.onChange({ [e.target.name]: e.target.value });
  };

  render() {
    const { data, index } = this.props;

    return (
      <div className="modal-input-line">
        <p className="modal-input-line-date">{dateAdapter(Date.now() - index * dayInMs)}</p>
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

export { ChartInputLine };

