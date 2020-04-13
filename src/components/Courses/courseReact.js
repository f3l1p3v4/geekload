import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

import node from '../../assets/react/node.jpeg';
import reactJS from '../../assets/react/react.jpg';
import reactNative from '../../assets/react/react-native.jpeg';
import flutter from '../../assets/react/flutter.png';
import ionic from '../../assets/react/ionic.png';

import estrela from '../../assets/estrela.jpg';

export default function Courses() {
    return (
        <>
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


        </>
    );
}
