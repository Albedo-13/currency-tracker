import React, { Component, createRef } from "react";
import "./mapbox.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

const accessToken = "pk.eyJ1IjoiYWxiZWRvLTEzIiwiYSI6ImNsdG81czNxODA1cnMybm1oNHlpMWwzbzYifQ.TzBIU653JOAB9ehp-co3pA";
mapboxgl.accessToken = "pk.eyJ1IjoiYWxiZWRvLTEzIiwiYSI6ImNsdG81czNxODA1cnMybm1oNHlpMWwzbzYifQ.TzBIU653JOAB9ehp-co3pA";

export default class Mapbox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lng: -70.9,
      lat: 42.35,
      zoom: 9,
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
