import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Component, MutableRefObject, createRef } from "react";
import { banksStaticInfo } from "@constants/constants";
import { BankType } from "@types";
import { findBanksByCurrencyCodeOrName } from "@utils/currencyFormatter";
import "./mapbox.scss";

mapboxgl.accessToken = "pk.eyJ1IjoiYWxiZWRvLTEzIiwiYSI6ImNsdG81czNxODA1cnMybm1oNHlpMWwzbzYifQ.TzBIU653JOAB9ehp-co3pA";

type MapboxProps = {
  searchString: string;
};
const lngLat: [number, number] = [27.6, 53.9];
const zoom: number = 10;

export default class Mapbox extends Component<MapboxProps> {
  markersList: mapboxgl.Marker[];
  mapContainer: MutableRefObject<HTMLDivElement | null>;
  map: mapboxgl.Map | null;
  filteredBanks: BankType[];

  constructor(props: MapboxProps) {
    super(props);
    this.markersList = [];
    this.mapContainer = createRef();
    this.map = null;
    this.filteredBanks = banksStaticInfo;
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer.current as HTMLDivElement,
      style: "mapbox://styles/mapbox/streets-v12",
      center: lngLat,
      zoom: zoom,
    });

    this.map = map;
    this.createMarkersBasedOnBanks(this.filteredBanks);
  }

  componentDidUpdate() {
    this.updateMarkers();
  }

  createMarkersBasedOnBanks = (banks: BankType[]) => {
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
        .addTo(this.map as mapboxgl.Map);
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
    return (
      <div className="bank-map">
        <div ref={this.mapContainer} className="map-container" />
      </div>
    );
  }
}
