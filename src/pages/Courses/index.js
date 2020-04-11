import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

import node from '../../assets/node.jpeg';
import reactJS from '../../assets/react.jpg';
import reactNative from '../../assets/react-native.jpeg';
import flutter from '../../assets/flutter.png';
import ionic from '../../assets/ionic.png';

import estrela from '../../assets/estrela.jpg'

import './styles.css';


import Header from '../../components/header';

function Coursos() {
    return (
        <>
            <Header />
            <div className='course-container'>
                <div className="course-title">
                    <h1>Bem-vindo(a) de volta</h1>
                    <h2 className="lead">
                        Cursos em destaque em <a href="">Desenvolvimento para Android</a>
                    </h2>
                </div>
                <section id="projects">
                    <div className="projects-container">
                        <div className="projects">
                            <div className="project">
                                <div className="project-image">
                                    <img src={reactNative} />
                                </div>
                                <div className="project-info">
                                    <div className="project-info-wrap">
                                        <h2 className="project-title">Saiba mais</h2>
                                    </div>
                                </div>
                                <div className="classificacao">
                                    <img src={estrela} alt="" />
                                </div>
                                <header>
                                    <div className="user-info">
                                        <strong>Curso de React Native</strong>
                                        <span>Crie aplicativos sensacionais com o Android Material Design de forma eficaz</span>
                                        <div className="price">
                                            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(29, 99)}</p>
                                            <s>
                                                <p style={{ fontWeight: 400, color: '#c43131', opacity: 0.5 }}> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(29, 99)}</p>
                                            </s>
                                        </div>
                                        <div className="instructor">
                                            <FaUserAlt />
                                            <p>135 Alunos</p>
                                        </div>
                                    </div>

                                </header>
                            </div>


                            <div className="project">
                                <div className="project-image">
                                    <img src={reactJS} />
                                </div>
                                <div className="project-info">
                                    <div className="project-info-wrap">
                                        <h2 className="project-title">Saiba mais</h2>
                                    </div>
                                </div>
                                <div className="classificacao">
                                    <img src={estrela} alt="" />
                                </div>
                                <header>
                                    <div className="user-info">
                                        <strong>Curso de React Native</strong>
                                        <span>Crie aplicativos sensacionais com o Android Material Design de forma eficaz</span>
                                        <div className="price">
                                            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(29, 99)}</p>
                                            <s>
                                                <p style={{ fontWeight: 400, color: '#c43131', opacity: 0.5 }}> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(29, 99)}</p>
                                            </s>
                                        </div>
                                        <div className="instructor">
                                            <FaUserAlt />
                                            <p>135 Alunos</p>
                                        </div>
                                    </div>

                                </header>
                            </div>


                            <div className="project">
                                <div className="project-image">
                                    <img src={node} />
                                </div>
                                <div className="project-info">
                                    <div className="project-info-wrap">
                                        <h2 className="project-title">Saiba mais</h2>
                                    </div>
                                </div>
                                <div className="classificacao">
                                    <img src={estrela} alt="" />
                                </div>
                                <header>
                                    <div className="user-info">
                                        <strong>Curso de React Native</strong>
                                        <span>Crie aplicativos sensacionais com o Android Material Design de forma eficaz</span>
                                        <div className="price">
                                            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(29, 99)}</p>
                                            <s>
                                                <p style={{ fontWeight: 400, color: '#c43131', opacity: 0.5 }}> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(29, 99)}</p>
                                            </s>
                                        </div>
                                        <div className="instructor">
                                            <FaUserAlt />
                                            <p>135 Alunos</p>
                                        </div>
                                    </div>

                                </header>
                            </div>


                            <div className="project">
                                <div className="project-image">
                                    <img src={flutter} />
                                </div>
                                <div className="project-info">
                                    <div className="project-info-wrap">
                                        <h2 className="project-title">Saiba mais</h2>
                                    </div>
                                </div>
                                <div className="classificacao">
                                    <img src={estrela} alt="" />
                                </div>
                                <header>
                                    <div className="user-info">
                                        <strong>Curso de React Native</strong>
                                        <span>Crie aplicativos sensacionais com o Android Material Design de forma eficaz</span>
                                        <div className="price">
                                            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(29, 99)}</p>
                                            <s>
                                                <p style={{ fontWeight: 400, color: '#c43131', opacity: 0.5 }}> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(29, 99)}</p>
                                            </s>
                                        </div>
                                        <div className="instructor">
                                            <FaUserAlt />
                                            <p>135 Alunos</p>
                                        </div>
                                    </div>

                                </header>
                            </div>


                            <div className="project">
                                <div className="project-image">
                                    <img src={ionic} />
                                </div>
                                <div className="project-info">
                                    <div className="project-info-wrap">
                                        <h2 className="project-title">Saiba mais</h2>
                                    </div>
                                </div>
                                <div className="classificacao">
                                    <img src={estrela} alt="" />
                                </div>
                                <header>
                                    <div className="user-info">
                                        <strong>Curso de React Native</strong>
                                        <span>Crie aplicativos sensacionais com o Android Material Design de forma eficaz</span>
                                        <div className="price">
                                            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(29, 99)}</p>
                                            <s>
                                                <p style={{ fontWeight: 400, color: '#c43131', opacity: 0.5 }}> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(29, 99)}</p>
                                            </s>
                                        </div>
                                        <div className="instructor">
                                            <FaUserAlt />
                                            <p>135 Alunos</p>
                                        </div>
                                    </div>

                                </header>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Coursos;

