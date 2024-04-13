import "./elasticSearch.scss";

import debounce from "debounce";
import { ChangeEvent, Component } from "react";

import searchIcon from "/icons/search-icon.svg";

type ElasticSearchProps = {
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const debounceDelay = 700;

export default class ElasticSearch extends Component<ElasticSearchProps> {
  render() {
    const { handleSearchChange } = this.props;
    return (
      <section className="bank-search">
        <div className="container">
          <h2 className="bank-search__title">Search currency in the bank</h2>
          <span className="bank-search-wrapper">
            <input
              onChange={debounce(handleSearchChange, debounceDelay)}
              className="bank-search__input"
              type="text"
              placeholder="Currency search..."
            />
            <img className="bank-search__icon" src={searchIcon} alt="search icon" />
          </span>
        </div>
      </section>
    );
  }
}
