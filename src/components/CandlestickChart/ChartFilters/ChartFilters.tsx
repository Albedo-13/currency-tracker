import "./chartFilters.scss";

import { zeroPrefix } from "@utils/chartAdapter";
import { ChangeEvent, Component } from "react";

type ChartFiltersProps = {
  onFilterClick: (from: number, to: number) => void;
};

type ChartFiltersState = {
  from: number;
  to: number;
};

class ChartFilters extends Component<ChartFiltersProps, ChartFiltersState> {
  constructor(props: ChartFiltersProps) {
    super(props);
    this.state = {
      from: 0,
      to: 0,
    };
  }

  handleDateChange = (e: ChangeEvent<HTMLInputElement>, setter: (value: number) => void) => {
    this.props.onFilterClick(this.state.from, this.state.to);
    const inputDate = new Date(e.target.value);
    const dateString = `${inputDate.getFullYear()}-${zeroPrefix(inputDate.getMonth() + 1)}-${zeroPrefix(
      inputDate.getDate()
    )}`;
    setter(Date.parse(dateString));
  };

  handleFilterClick = () => {
    this.props.onFilterClick(this.state.from, this.state.to);
  };

  handleChangePickedDate = (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
    return this.handleDateChange(e, (value) =>
      this.setState((prevState) => ({
        ...prevState,
        [key]: value,
      }))
    );
  };

  render() {
    return (
      <section className="chart-filters">
        <label className="chart-filters__label">
          from:
          <input
            type="date"
            min="2024-03-27"
            max="2024-04-09"
            onChange={this.handleChangePickedDate("from")}
            className="chart-filters__date"
          />
        </label>
        <label className="chart-filters__label">
          to:
          <input
            type="date"
            min="2024-03-27"
            max="2024-04-09"
            onChange={this.handleChangePickedDate("to")}
            className="chart-filters__date"
          />
        </label>
        <button onClick={this.handleFilterClick} className="chart__button">
          Filter
        </button>
      </section>
    );
  }
}

export { ChartFilters };
