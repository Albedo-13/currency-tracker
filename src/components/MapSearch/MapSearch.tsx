import React, { Component } from "react";
import ElasticSearch from "./ElasticSearch/ElasticSearch";
import Mapbox from "./Mapbox/Mapbox";

// TODO: tooltips on hover

export default class MapSearch extends Component {
  state = {
    searchString: "",
  };

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    console.log(this.state.searchString); //-
    return (
      <>
        <ElasticSearch searchString={this.state.searchString} handleSearchChange={this.handleSearchChange} />
        <Mapbox />
      </>
    );
  }
}
