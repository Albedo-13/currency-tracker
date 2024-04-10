import { Component } from "react";
import "./chartFilters.scss";
import { zeroPrefix } from "../../../utils/chartAdapter";

type TChartFiltersProps = {
  onFilterClick: (from: number, to: number) => void;
};

type TChartFiltersState = {
  from: number;
  to: number;
};

class ChartFilters extends Component<TChartFiltersProps, TChartFiltersState> {
  constructor(props: TChartFiltersProps) {
    super(props);
    this.state = {
      from: 0,
      to: 0,
    };
  }

  handleDateChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (value: number) => void) => {
    const inputDate = new Date(e.target.value);
    const dateString = `${inputDate.getFullYear()}-${zeroPrefix(inputDate.getMonth() + 1)}-${zeroPrefix(
      inputDate.getDate()
    )}`;
    setter(Date.parse(dateString));
  };

  handleFilterClick = () => {
    const { from, to } = this.state;
    const { onFilterClick } = this.props;
    onFilterClick(from, to);
  };

  render() {
    return (
      <section className="chart-filters">
        <label className="chart-filters-label">
          from:
          <input
            type="date"
            onChange={(e) => this.handleDateChange(e, (value) => this.setState({ from: value }))}
            className="chart-filters-date"
          />
        </label>
        <label className="chart-filters-label">
          to:
          <input
            type="date"
            onChange={(e) => this.handleDateChange(e, (value) => this.setState({ to: value }))}
            className="chart-filters-date"
          />
        </label>
        <button onClick={this.handleFilterClick} className="chart-button">
          Filter
        </button>
      </section>
    );
  }
}

export default ChartFilters;
