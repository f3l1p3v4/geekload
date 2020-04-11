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
              <h1>QUEM SOMOS</h1>
              <p>O estúdio de design ID7 Studio é especializado na criação visual de empresas e profissionais
                autônomos. Trata-se de uma empresa de capital fechado constituída de multi-talentosos designers, 
                desenvolvedores web e profissionais de marketing. Design é fator fundamental no novo cenário competitivo 
                mundial agregando valor e aumentan do significativamente a qualidade percebida nos produtos e serviços. 
                Ele agrega valor ao produto e desencadeia um processo de estímulos visuais tanto em seu cliente potencial 
                quanto nos próprios funcionários criando uma marca forte e bem sucedida.</p>
              {/* <Link to="/courses">Eu quero investir em conhecimento!</Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="about-info">
          <section>
            <h1>Missão</h1>
            <p>Fale o que achou da e nos conte se podemos melhorar para juntos mudarmos a vida de muitos.</p>
          </section>

          <section>
            <h1>Visão</h1>
            <p>Fale o que achou da e nos conte se podemos melhorar para juntos mudarmos a vida de muitos.</p>
          </section>

          <section>
            <h1>Valores</h1>
            <p>Fale o que achou da e nos conte se podemos melhorar para juntos mudarmos a vida de muitos.</p>
          </section>
        </div>
    </>
  );
}
