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
        <h1>Olá,</h1>
        <p>
          Tenho 23 anos, sou um dev desde de 2016 quando iniciei Ciência da
          Computação na faculdade Uniderp em Campo Grande-MS, foi quando conheci{" "}
          <a href="/#contact">Quer saber mais?</a>
        </p>
      </div>
    </div>
  </section>
);

export default About;
