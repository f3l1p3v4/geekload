import React, { Component } from "react";
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

class Header extends Component {
  render() {
    return (
      <header className="nav">
        <nav className="navbar">
          <div >
            <a href="/">
              <img src={logo} alt="Logo DevLoad" className="logo" />
            </a>
          </div>
          <div className="spacer" />
          <div className="navbar-menu">
            <ul>
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/courses">Cursos</Link>
              </li>
              <li>
                <Link to="https://www.google.com/">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="btn">
            <button className="btn-1">Login</button>
            <button className="btn-2">Cadastrar-se</button>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;