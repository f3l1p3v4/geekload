import React, { Component } from "react";

import boleto from "../assets/boleto.svg";
import credit from "../assets/credit.svg";

class subPresentation extends Component {
    render() {
        return (
            <div className="sub-presentation">
                <h1>Formas de pagamento</h1>
                <section class="sub-presentation-section">
                    <div className="sub-presentation-card">
                        <div className="card-text">
                            <h1>Page com Boleto!</h1>
                            <h3>Seja avisado no seu e-mail quando um novo curso for lançado.</h3>
                        </div>
                        <div className="card-image">
                            <img src={boleto} alt="boleto"/>
                        </div>  
                    </div>
                    <div className="sub-presentation-card">
                        <div className="card-text">
                            <h1>Page com cartão!</h1>
                            <h3>Seja avisado no seu e-mail quando um novo curso for lançado.</h3>
                        </div>
                        <div className="card-image">
                            <img src={credit} alt="credit"/>
                        </div> 
                    </div>
                    <div className="sub-presentation-card">
                        <div className="card-text">
                            <h1>Page com cartão!</h1>
                            <h3>Seja avisado no seu e-mail quando um novo curso for lançado.</h3>
                        </div>
                        <div className="card-image">
                            <img src={credit} alt="credit"/>
                        </div> 
                    </div>
                </section>
            </div>
        )
    }
}

export default subPresentation;