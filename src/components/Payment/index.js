import React, { Component } from "react";

import boleto from "../../assets/boleto.svg";
import credit from "../../assets/credit.svg";

import "./styles.css";

class Payment extends Component {
  render() {
    return (
      <div className="payment">
        <section className="payment-section">
          <div className="payment-card">
            <div className="card-text">
              <h1>Pague com Boleto!</h1>
              <h3>
                Seja avisado no seu e-mail quando um novo curso for lançado.
              </h3>
            </div>
            <div className="card-image">
              <img src={boleto} alt="boleto" />
            </div>
          </div>
          <div className="payment-card">
            <div className="card-text">
              <h1>Pague com cartão!</h1>
              <h3>
                Seja avisado no seu e-mail quando um novo curso for lançado.
              </h3>
            </div>
            <div className="card-image">
              <img src={credit} alt="credit" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Payment;
