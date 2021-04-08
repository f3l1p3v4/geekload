import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

import notification from "../../assets/notificacao.png";

import "./styles.css";

class Exclusive extends Component {
  render() {
    return (
      <>
        <div className="exclusive">
          <section className="exclusive-section">
            <div className="image">
              <img src={notification} alt="notification" />
            </div>

            <div className="text">
              <h1>Fique atualizado!</h1>
              <h3>
                Seja avisado no seu e-mail quando um novo curso for lançado.
              </h3>
              <form onSubmit={() => {}}>
                <input
                  placeholder="Nome"
                  className="exclusive-input"
                  // value={name}
                  // onChange={e => setName(e.target.value)}
                />

                <input
                  className="exclusive-input"
                  type="email"
                  placeholder="Digite seu melhor E-mail"
                  // value={email}
                  // onChange={e => setEmail(e.target.value)}
                />

                <button className="exclusive-button" type="submit">
                  Enviar
                </button>
              </form>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Exclusive;
