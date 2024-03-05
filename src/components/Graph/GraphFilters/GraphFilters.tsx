import { Component } from "react";
import "./graphFilters.scss";

export default class GraphFilters extends Component {
  render() {
    return (
      <section className="graph-filters">
        <div className="container">
          <div className="graph-filters-wrapper">
            <span className="ui-select-base ui-select-extended-icon ui-select-basic">
              <select name="select-four" className="ui-select">
                <option value="">Dollar</option>
                <option value="">Euro</option>
                <option value="">Rubble</option>
                <option value="">Yen</option>
              </select>
            </span>
            <input name="graph-start-date" type="date" min="2018-01-01" />
            <input name="graph-end-date" type="date" min="2018-01-01" />
          </div>
        </div>
      </section>
    );
  }
}
