import React from 'react';

import './styles.css';

import Header from '../../components/header';

import QuemSomos from '../../assets/QuemSomos.png'

export default function Contact() {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-content">
          <section>
            <img src={QuemSomos} alt="Quem somos" />
          </section>

          <div className="about-text">
            <div>
              <section>
                <h1>QUEM SOMOS</h1>
                <p>A GeekLoad é um dos maiores realizadores de sonho do mercado digital de aprendizado e instrução.
                Trata-se de uma empresa que visa construir estudantes em desenvolvedores, designers e tudo relacionado a tecnologia, afinal
              estamos vivendo na era da tecnologia onde empresas e pessoas respiram isso.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="about-info">
        <section>
          <h1>Missão</h1>
          <p>Transformar os sonhos de nossos clientes em realidade, fornecendo infoprodutos de qualidade, através de cursos profissionalizantes.</p>
        </section>

        <section>
          <h1>Visão</h1>
          <p>Ser a melhor empresa de educação e mudança de vida do Brasil</p>
        </section>
      </div>
    </>
  );
}
