import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <div className="social-container">
            <Link to="/about"
            >
                <p>Quem somos</p>
            </Link>
            <Link
                to="/"
            >
                <p>Termos</p>
            </Link>
            <Link
                to="/"
            >
                <p>Política de Privacidade</p>
            </Link>
        </div>
        <p>© {new Date().getFullYear()}, Copyright. Site desenvolvido por Felipe Valdez</p>
    </footer>
)

export default Footer;