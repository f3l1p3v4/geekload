import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

class Presentation extends Component {
  render() {
    return (
      <div className="presentation">
        <section className="presentation-container">
          <h1 className="typing-animation">DevLoad</h1>
          <h2>Faz você pensar fora da caixa.</h2>
          <p>
            Transforme a sua vida e a de milhares, milhões ou até bilhões de
            pessoas com tecnologia.
          </p>
          <div className="presentation-button">
            <Link to="/course">Iniciar!</Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Presentation;
