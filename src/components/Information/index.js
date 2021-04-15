import React, { Component } from "react";

import time from "../../assets/time.svg";
import safe from "../../assets/safe.svg";
import multimedia from "../../assets/multimedia.svg";

import "./styles.css";

class Information extends Component {
  render() {
    return (
      <div className="information">
        <section className="information-section">
          <div className="information-card">
            <div className="card-text">
              <h1>Faça no seu tempo!</h1>
            </div>
            <div className="card-image">
              <img src={time} alt="Relógio" />
            </div>
          </div>
          <hr />
          <div className="information-card">
            <div className="card-text">
              <h1>Totalmente seguro!</h1>
            </div>
            <div className="card-image">
              <img src={safe} alt="Seguro" />
            </div>
          </div>
          <hr />
          <div className="information-card">
            <div className="card-text">
              <h1>Assista online!</h1>
            </div>
            <div className="card-image">
              <img src={multimedia} alt="Multimidia" />
            </div>
          </div>
          <hr />
        </section>
      </div>
    );
  }
}

export default Information;
