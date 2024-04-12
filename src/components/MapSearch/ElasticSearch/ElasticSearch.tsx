import "./elasticSearch.scss";

import debounce from "debounce";
import { Component } from "react";

import searchIcon from "/icons/search-icon.svg";

type ElasticSearchProps = {
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const debounceDelay = 700;

export default class ElasticSearch extends Component<ElasticSearchProps> {
  render() {
    const { handleSearchChange } = this.props;
    return (
      <section className="bank-search">
        <div className="container">
          <h2 className="bank-search-title">Search currency in the bank</h2>
          <span className="bank-search-wrapper">
            <input
              onChange={debounce(handleSearchChange, debounceDelay)}
              className="bank-search-input"
              type="text"
              placeholder="Currency search..."
            />
            <img className="bank-search-icon" src={searchIcon} alt="search icon" />
          </span>
        </div>
      </section>
    );
  }
}
