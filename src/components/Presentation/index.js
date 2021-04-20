import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

class Presentation extends Component {
  render() {
    return (
      <div className="presentation">
        <section className="presentation-container">
          <div>
            <h1>DevLoad</h1>
            <h1>Faz você pensar fora da caixa.</h1>
            <p>
              Transforme a sua vida e a de milhares, milhões ou até bilhões de
              pessoas com tecnologia.
            </p>
            <div>
              <Link to="/course">Iniciar!</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Presentation;
