import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

class Presentation extends Component {
  render() {
    return (
      <div className="presentation">
        <section class="presentation-container">
          <div>
            <h1>
              <h1>DevLoad</h1> Faz você pensar fora da caixa.{" "}
            </h1>
            <p>
              Transforme a sua vida e a de milhares, milhões ou até bilhões de
              pessoas com tecnologia.
            </p>
            <Link to="/courses">Iniciar!</Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Presentation;
