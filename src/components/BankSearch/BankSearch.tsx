import { Component } from "react";
import searchIcon from "/icons/search-icon.svg";;
import "./bankSearch.scss";

export default class BankSearch extends Component {
  render() {
    return (
      <section className="bank-search">
        <div className="container">
          <h2 className="bank-search-title">Search currency in the bank</h2>
          <span className="bank-search-wrapper">
            <input className="bank-search-input" type="text" placeholder="Currency search..." />
            <img className="bank-search-icon" src={searchIcon} alt="search icon" />
          </span>
        </div>
      </section>
    );
  }
}
