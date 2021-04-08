import React from "react";

import "./styles.css";

const Footer = () => (
  <footer>
    <div className="social-container">
      <a href="/about">
        <p>Quem somos</p>
      </a>
      <a href="/">
        <p>Termos</p>
      </a>
      <a href="/">
        <p>Política de Privacidade</p>
      </a>
    </div>
    <p>
      © 2020/{new Date().getFullYear()}, Copyright. Site desenvolvido por Felipe
      Valdez
    </p>
  </footer>
);

export default Footer;
