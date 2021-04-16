import React from "react";
import DevWomen from "../../assets/dev-women.svg";

import "./styles.css";

const About = () => (
  <section id="about-dev">
    <div className="about-dev-container">
      <div className="coder-img">
        <img src={DevWomen} alt="Developer Women" />
      </div>
      <div className="profile">
        <span role="img" aria-labelledby="Coração e Foco">
          Olá Desenvolvedor(a) 💙, Evolua rápido com os melhores cursos do
          mercado 🎯.
        </span>
      </div>
    </div>
  </section>
);

export default About;
