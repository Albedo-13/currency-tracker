import React, { Component } from "react";
import ElasticSearch from "./ElasticSearch/ElasticSearch";
import Mapbox from "./Mapbox/Mapbox";

export default class MapSearch extends Component {
  render() {
    return (
      <>
        <ElasticSearch />
        <Mapbox />
      </>
    );
  }
}
