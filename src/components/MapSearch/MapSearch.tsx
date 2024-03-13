import React, { Component } from "react";
import ElasticSearch from "./ElasticSearch/ElasticSearch";
import Mapbox from "./Mapbox/Mapbox";
import { banksStaticInfo } from "../../constants/constants";

// TODO: tooltips on hover
// TODO?: rearrange camera on update
// TODO: elastic search

export default class MapSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
    };
    this.filteredBanks = banksStaticInfo;
  }

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    console.log("searchString:", this.state.searchString); //-
    return (
      <>
        <ElasticSearch handleSearchChange={this.handleSearchChange} />
        <Mapbox searchString={this.state.searchString} />
      </>
    );
  }
}
