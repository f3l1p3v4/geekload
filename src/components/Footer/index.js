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
        <Link to="/course">
          <p>Cursos</p>
        </Link>
      </div>
      <div className="footer-social">
        <a href="https://m.facebook.com/devload.oficial">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/devload_oficial">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/devload1">
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
