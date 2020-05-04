import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiYoutube, FiLinkedin } from 'react-icons/fi';

import developer from '../assets/developer.png';

class Presentation extends Component {
    render() {
        return (
            <div className="presentation">
                <div className="link-social">
                    <ul>
                        <li>
                            <a
                                href="https://www.facebook.com/geekloadoficial/?modal=admin_todo_tour"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiFacebook />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/geekload_oficial/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiInstagram />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.google.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiLinkedin />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/channel/UC4kbo7q2grJ737nbhlY-YIA?view_as=subscriber"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiYoutube />
                            </a>
                        </li>
                    </ul>
                </div>
                <section class="presentation-container">
                    <div>
                        <h1>VOCÊ NUNCA PERDE INVESTIMENTO QUANDO GANHA <h1>CONHECIMENTO.</h1> </h1>
                        <p>Transforme a sua vida e a de milhares, milhões ou até bilhões de pessoas com tecnologia.</p>
                        <Link to="/courses">Eu quero investir em conhecimento!</Link>
                    </div><img src={developer} alt="Developer" className="presentation-img" />
                </section>
            </div>
        )
    }
}

export default Presentation;