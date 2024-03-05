import { Component } from "react";
import dollar from "/currency-icons/Dollar Icon.svg";
import "./graph.scss";

export default class Graph extends Component {
  render() {
    return (
      <section className="graph">
        <div className="container">
          <div className="graph-info-wrapper">
            <div className="graph-info-image">
              {/* TODO: change alt tag from input data */}
              <img src={dollar} alt="currency graph info" />
            </div>
            <div className="graph-info-content">
              <p className="graph-info-name">Commercial Dollar</p>
              <p className="graph-info-short">USD</p>
            </div>
          </div>
          <img
            style={{ maxHeight: "500px", marginTop: "50px", marginBottom: "100px", width: "100%" }}
            src={"https://i.pinimg.com/736x/ee/7c/f4/ee7cf47743109266680886cca1ef5869.jpg"}
            alt=""
          />
        </div>
      </section>
    );
  }
}
