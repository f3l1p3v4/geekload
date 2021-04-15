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
        <h1>
          Olá Desenvolvedor(a) 💙, Evolua rápido com os melhores cursos do
          mercado 🎯.
        </h1>
      </div>
    </div>
  </section>
);

export default About;
