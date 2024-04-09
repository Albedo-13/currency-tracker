import { Component } from "react";
import "./chartFilters.scss";
// import Select from "../../Select/Select";

export default class ChartFilters extends Component {
  // TODO: logic from select to here
  // const currencies = useQuery({ queryKey: ["currencies"], queryFn: getCurrencyData });
  // const currenciesData = currencies.data?.data.data;

  render() {
    return (
      <section className="chart-filters">
        <div className="container">
          <div className="chart-filters-wrapper">
            {/* <Select /> */}
            <input name="chart-start-date" type="date" min="2018-01-01" />
            <input name="chart-end-date" type="date" min="2018-01-01" />
          </div>
        </div>
      </section>
    );
  }
}
