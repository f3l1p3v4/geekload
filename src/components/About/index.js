import React from "react";
import student from "../../assets/student.png";

import "./styles.css";

const About = () => (
  <section id="about-dev">
    <div className="about-dev-container">
      <div className="coder-img">
        <img src={student} alt="Developer" />
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
