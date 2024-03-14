import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { banksStaticInfo } from "../../../constants/constants";
import { findBanksByCurrencyCodeOrName } from "../../../utils/currencyFormatter";
import { TBank } from "../../../types/types";
import "./mapbox.scss";

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
      zoom: 10,
    });

    this.map = map;
    this.createMarkersBasedOnBanks(banksStaticInfo);
  }

  componentDidUpdate() {
    this.updateMarkers();
  }

  createMarkersBasedOnBanks = (banks: TBank[]) => {
    banks.map((bank) => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `
        <p class="mapboxgl-popup-name">${bank.name}</p>
        <p class="mapboxgl-popup-address">${bank.address}</p>
        <p class="mapboxgl-popup-currencies">
          ${bank.currencies.map((currency) => `${currency.code}`).join(", ")}
        </p>
        `
      );
      const marker = new mapboxgl.Marker()
        .setLngLat([bank.coordinates[0], bank.coordinates[1]])
        .setPopup(popup)
        .addTo(this.map);
      this.markersList.push(marker);
    });
  };

  removeAllMarkers = () => {
    for (let i = this.markersList.length - 1; i >= 0; i--) {
      this.markersList[i].remove();
    }
  };

  updateMarkers = () => {
    this.removeAllMarkers();
    this.filteredBanks = findBanksByCurrencyCodeOrName(this.props.searchString, banksStaticInfo);
    this.createMarkersBasedOnBanks(this.filteredBanks);
  };

  render() {
    console.log("mapbox render");

    return (
      <div className="bank-map">
        <div ref={this.mapContainer} className="map-container" />
      </div>
    );
  }
}
