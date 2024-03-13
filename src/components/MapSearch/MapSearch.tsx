import React, { Component } from "react";
import ElasticSearch from "./ElasticSearch/ElasticSearch";
import Mapbox from "./Mapbox/Mapbox";
import { banksStaticInfo } from "../../constants/constants";
import { findBanksByCurrencyCodeOrName } from "../../utils/currencyFormatter";

// TODO: tooltips on hover

export default class MapSearch extends Component {
  state = {
    searchString: "",
  };
  filteredBanks = banksStaticInfo;

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchString: e.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("before", this.filteredBanks);
    this.filteredBanks = findBanksByCurrencyCodeOrName(this.state.searchString, banksStaticInfo);
    console.log("after", this.filteredBanks);
  }

  render() {
    console.log(this.state.searchString); //-
    return (
      <>
        <ElasticSearch searchString={this.state.searchString} handleSearchChange={this.handleSearchChange} />
        <Mapbox filteredBanks={this.filteredBanks} />
      </>
    );
  }
}
