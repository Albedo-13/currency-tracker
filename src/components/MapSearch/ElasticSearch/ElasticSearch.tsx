import { Component } from "react";
import searchIcon from "/icons/search-icon.svg";
import "./elasticSearch.scss";

type TProps = {
  searchString: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default class ElasticSearch extends Component<TProps> {
  // constructor(props: TProps) {
  //   super(props);
  // }

  render() {
    const { searchString, handleSearchChange } = this.props;
    return (
      <section className="bank-search">
        <div className="container">
          <h2 className="bank-search-title">Search currency in the bank</h2>
          <span className="bank-search-wrapper">
            <input
              value={searchString}
              onChange={handleSearchChange}
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
