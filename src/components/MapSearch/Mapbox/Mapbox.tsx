import React, { Component, createRef } from "react";
import "./mapbox.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { banksStaticInfo } from "../../../constants/constants";
import { findBanksByCurrencyCodeOrName } from "../../../utils/currencyFormatter";

const accessToken = "pk.eyJ1IjoiYWxiZWRvLTEzIiwiYSI6ImNsdG81czNxODA1cnMybm1oNHlpMWwzbzYifQ.TzBIU653JOAB9ehp-co3pA";
mapboxgl.accessToken = "pk.eyJ1IjoiYWxiZWRvLTEzIiwiYSI6ImNsdG81czNxODA1cnMybm1oNHlpMWwzbzYifQ.TzBIU653JOAB9ehp-co3pA";

export default class Mapbox extends Component {
  constructor(props) {
    super(props);
    this.markersList = [];
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [27.6, 53.9],
      zoom: 8,
    });

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );

    banksStaticInfo.map((feature) => {
      const marker = new mapboxgl.Marker().setLngLat(feature.coordinates).addTo(map);
      this.markersList.push(marker);
    });

    this.map = map;
  }

  removeAllMarkers = () => {
    for (let i = this.markersList.length - 1; i >= 0; i--) {
      this.markersList[i].remove();
    }
  };

  updateMarkers = () => {
    this.removeAllMarkers();

    this.filteredBanks = findBanksByCurrencyCodeOrName(this.props.searchString, banksStaticInfo);
    this.filteredBanks.map((bank) => {
      const marker = new mapboxgl.Marker().setLngLat([bank.coordinates[0], bank.coordinates[1]]).addTo(this.map);
      this.markersList.push(marker);
    });
  };

  componentDidUpdate() {
    this.updateMarkers();
  }

  render() {
    console.log("mapbox render");

    return (
      <div className="bank-map">
        <div ref={this.mapContainer} className="map-container" />
      </div>
    );
  }
}
