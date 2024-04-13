import type { XOHLCType } from "@types";
import { type ChangeEvent, Component } from "react";

type ChartInputItemProps = {
  data: XOHLCType;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

class ChartInputItem extends Component<ChartInputItemProps> {
  render() {
    const { data, onInputChange, value } = this.props;

    return (
      <label className="modal-label_small">
        {value}:
        <input
          className="modal-input modal-input_small"
          value={data[value as keyof XOHLCType] || ""}
          onChange={onInputChange}
          name={value}
          type="number"
          required
        />
      </label>
    );
  }
}

export { ChartInputItem };
