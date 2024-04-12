import { ChangeEvent, Component } from "react";
import { zeroPrefix } from "../../../utils/chartAdapter";
import "./chartFilters.scss";

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

  handleDateChange = (e: ChangeEvent<HTMLInputElement>, setter: (value: number) => void) => {
    const inputDate = new Date(e.target.value);
    const dateString = `${inputDate.getFullYear()}-${zeroPrefix(inputDate.getMonth() + 1)}-${zeroPrefix(
      inputDate.getDate()
    )}`;
    setter(Date.parse(dateString));
  };

  handleFilterClick = () => {
    this.props.onFilterClick(this.state.from, this.state.to);
  };

  handleChangePickedDate = (e: ChangeEvent<HTMLInputElement>) => {
    return this.handleDateChange(e, (value) => this.setState({ from: value }));
  };

  render() {
    return (
      <section className="chart-filters">
        <label className="chart-filters-label">
          from:
          <input type="date" onChange={(e) => this.handleChangePickedDate(e)} className="chart-filters-date" />
        </label>
        <label className="chart-filters-label">
          to:
          <input type="date" onChange={(e) => this.handleChangePickedDate(e)} className="chart-filters-date" />
        </label>
        <button onClick={this.handleFilterClick} className="chart-button">
          Filter
        </button>
      </section>
    );
  }
}

export { ChartFilters };
