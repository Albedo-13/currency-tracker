import React, { Component, createRef } from "react";
import "./mapbox.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"; // eslint-disable-line import/no-webpack-loader-syntax
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { banksStaticInfo } from "../../../constants/constants";

const accessToken = "pk.eyJ1IjoiYWxiZWRvLTEzIiwiYSI6ImNsdG81czNxODA1cnMybm1oNHlpMWwzbzYifQ.TzBIU653JOAB9ehp-co3pA";
mapboxgl.accessToken = "pk.eyJ1IjoiYWxiZWRvLTEzIiwiYSI6ImNsdG81czNxODA1cnMybm1oNHlpMWwzbzYifQ.TzBIU653JOAB9ehp-co3pA";

// SOURCE: https://stackoverflow.com/questions/55012454/the-correct-way-to-update-props-with-mapbox

export default class Mapbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 27.5,
      lat: 53.8,
      // zoom: 8,
      zoom: 0,
    };
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );

    banksStaticInfo.map((feature) => new mapboxgl.Marker().setLngLat(feature.coordinates).addTo(map));

    this.map = map;
  }

  componentDidUpdate(prevProps, prevState) {
    const { lng, lat, zoom } = prevState;

    // banksStaticInfo.map((feature) => new mapboxgl.Marker().setLngLat([Math.random() * 10, Math.random() * 10]).addTo(this.map));
  }

  render() {
    const { lng, lat, zoom } = this.state;
    return (
      <div className="bank-map">
        <div>
          <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
          <div ref={this.mapContainer} className="map-container" />
        </div>
      </div>
    );
  }
}
