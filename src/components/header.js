import React, { Component } from "react";
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

import Drawer from  '../components/MenuOverlay/Drawertogglebutton';

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
                <Link to="/about">Quem somos</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
            </ul>
          </div>
          
          <div className="spacer-button" />

          <Drawer className="drawer" />

        </nav>
      </header>
    )
  }
}

export default Header;