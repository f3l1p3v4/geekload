import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

import logoTitle from "../../assets/icon-title.png";

import "./styles.css";

const Footer = () => (
  <footer>
    <hr />
    <div className="social-container">
      <div className="footer-info">
        <Link to="/about">
          <p>Quem somos</p>
        </Link>
        <Link to="/">
          <p>Termos</p>
        </Link>
        <Link to="/">
          <p>Política de Privacidade</p>
        </Link>
      </div>
      <div className="footer-social">
        <Link to="/about">
          <FaFacebook />
        </Link>
        <Link to="/">
          <FaInstagram />
        </Link>
        <Link to="/">
          <FaTwitter />
        </Link>
      </div>
    </div>
    <div className="footer-img">
      <img src={logoTitle} alt="Logo DevLoad" className="logo-title" />
      <p>© 2020/{new Date().getFullYear()}, DevLoad.</p>
    </div>
  </footer>
);

export default Footer;
