import { XOHLCType } from "@types";
import { dateAdapter } from "@utils/chartAdapter";
import { type ChangeEvent, Component } from "react";

import { dayInMs } from "@/constants/constants";

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
        <p className="modal-input-line__date">{dateAdapter(Date.now() - index * dayInMs)}</p>
        <div className="modal-input__group">
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

