import { Component } from "react";
import "./graphFilters.scss";
import Select from "../../Select/Select";

export default class GraphFilters extends Component {
  render() {
    return (
      <section className="graph-filters">
        <div className="container">
          <div className="graph-filters-wrapper">
            <Select />
            <input name="graph-start-date" type="date" min="2018-01-01" />
            <input name="graph-end-date" type="date" min="2018-01-01" />
          </div>
        </div>
      </section>
    );
  }
}
