import React, { Component } from "react";

import time from "../../assets/time.svg";
import safe from "../../assets/safe.svg";
import video from "../../assets/video.svg";

import "./styles.css";

class subPresentation extends Component {
  render() {
    return (
      <div className="information">
        <section class="information-section">
          <div className="information-card">
            <div className="card-text">
              <h1>Faça no seu tempo!</h1>
              <h3>Faça no seu ritmo.</h3>
            </div>
            <div className="card-image">
              <img src={time} alt="Relógio" />
            </div>
          </div>
          <div className="information-card">
            <div className="card-text">
              <h1>Totalmente seguro!</h1>
              <h3>Plataforma rigorosamente segura.</h3>
            </div>
            <div className="card-image">
              <img src={safe} alt="Seguro" />
            </div>
          </div>
          <div className="information-card">
            <div className="card-text">
              <h1>Assista online!</h1>
              <h3>Assista de onde quiser.</h3>
            </div>
            <div className="card-image">
              <img src={video} alt="Video" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default subPresentation;
