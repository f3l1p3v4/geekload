import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import logoTitle from "../../assets/icon-title.png";

import "./styles.css";

const Footer = () => (
  <footer>
    <hr />
    <div className="social-container">
      <div className="footer-info">
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
      <div className="footer-social">
        <a href="/about">
          <FaFacebook />
        </a>
        <a href="/">
          <FaInstagram />
        </a>
        <a href="/">
          <FaTwitter />
        </a>
      </div>
    </div>
    <div className="footer-img">
      <img src={logoTitle} alt="Logo DevLoad" className="logo-title" />
      <p>© 2020/{new Date().getFullYear()}, DevLoad.</p>
    </div>
  </footer>
);

export default Footer;
