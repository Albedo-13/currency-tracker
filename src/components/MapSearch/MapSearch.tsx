import React, { Component } from "react";

import ElasticSearch from "./ElasticSearch/ElasticSearch";
import Mapbox from "./Mapbox/Mapbox";

export default class MapSearch extends Component {
  state = {
    searchString: "",
  };

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    return (
      <>
        <ElasticSearch handleSearchChange={this.handleSearchChange} />
        <Mapbox searchString={this.state.searchString} />
      </>
    );
  }
}
