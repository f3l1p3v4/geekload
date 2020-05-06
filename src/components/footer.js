import React from 'react';

const Footer = () => (
    <footer>
        <div className="social-container">
            <a href="/about"
            >
                <p>Quem somos</p>
            </a>
            <a
                href="/"
            >
                <p>Termos</p>
            </a>
            <a
                href="/"
            >
                <p>Política de Privacidade</p>
            </a>
        </div>
        <p>© {new Date().getFullYear()}, Copyright. Site desenvolvido por Felipe Valdez</p>
    </footer>
)

export default Footer;