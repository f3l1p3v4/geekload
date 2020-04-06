import React from 'react';

import node from '../assets/node.jpeg';
import reactJS from '../assets/react.jpg';
import reactNative from '../assets/react-native.jpeg';


import Header from '../components/header';

function Coursos() {
    return (
        <>
            <Header />
            <div className='course-container'>

                <h1>Bem-vindo(a) de volta</h1>

                <p>Aprenda <a href="">React</a> e <a href="">React Native</a></p>
                <ul>
                    <li className="course-item">
                        <header>
                            <div className="user-info">
                                <img src={reactJS} alt="" />
                                <div className="user-title">
                                    <strong>Curso de Node.js, React e React Native</strong>
                                    <div className="user-description">
                                        <span>
                                            O curso de Node.js começa desde o básico, desde como instalar, em em seguida como usar o Node.js com banco de dados MySQL,
                                </span>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </li>

                    <li className="course-item">
                        <header>
                            <div className="user-info">
                                <img src={node} alt="" />
                                <div className="user-title">
                                    <strong>Curso de Node.js</strong>
                                    <div className="user-description">
                                        <span>
                                            O curso de Node.js começa desde o básico, desde como instalar, em em seguida como usar o Node.js com banco de dados MySQL,
                                </span>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </li>

                    <li className="course-item">
                        <header>
                            <div className="user-info">
                                <img src={reactNative} alt="" />
                                <div className="user-title">
                                    <strong>Curso de Node.js</strong>
                                    <div className="user-description">
                                        <span>
                                            O curso de Node.js começa desde o básico, desde como instalar, em em seguida como usar o Node.js com banco de dados MySQL,
                                </span>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </li>

                    <li className="course-item">
                        <header>
                            <div className="user-info">
                                <img src={node} alt="" />
                                <div className="user-title">
                                    <strong>Curso de Node.js</strong>
                                    <div className="user-description">
                                        <span>
                                            O curso de Node.js começa desde o básico, desde como instalar, em em seguida como usar o Node.js com banco de dados MySQL,
                                </span>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </li>
                </ul>

                <p>Aprenda <a href="">React</a> e <a href="">React Native</a></p>
                <ul>
                    <li className="course-item">
                        <header>
                            <div className="user-info">
                                <img src={reactJS} alt="" />
                                <div className="user-title">
                                    <strong>Curso de Node.js, React e React Native</strong>
                                    <div className="user-description">
                                        <span>
                                            O curso de Node.js começa desde o básico, desde como instalar, em em seguida como usar o Node.js com banco de dados MySQL,
                                </span>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </li>

                    <li className="course-item">
                        <header>
                            <div className="user-info">
                                <img src={node} alt="" />
                                <div className="user-title">
                                    <strong>Curso de Node.js</strong>
                                    <div className="user-description">
                                        <span>
                                            O curso de Node.js começa desde o básico, desde como instalar, em em seguida como usar o Node.js com banco de dados MySQL,
                                </span>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </li>

                    <li className="course-item">
                        <header>
                            <div className="user-info">
                                <img src={reactNative} alt="" />
                                <div className="user-title">
                                    <strong>Curso de Node.js</strong>
                                    <div className="user-description">
                                        <span>
                                            O curso de Node.js começa desde o básico, desde como instalar, em em seguida como usar o Node.js com banco de dados MySQL,
                                </span>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </li>

                    <li className="course-item">
                        <header>
                            <div className="user-info">
                                <img src={node} alt="" />
                                <div className="user-title">
                                    <strong>Curso de Node.js</strong>
                                    <div className="user-description">
                                        <span>
                                            O curso de Node.js começa desde o básico, desde como instalar, em em seguida como usar o Node.js com banco de dados MySQL,
                                </span>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Coursos;
