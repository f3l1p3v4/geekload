import React from 'react';

import CourseWordpress from '../../components/Courses/courseWordpress'; 
import CourseReact from '../../components/Courses/courseReact'; 
import CourseMobile from '../../components/Courses/courseMobile'; 
import CourseJogos from '../../components/Courses/courseJogos'; 
import Header from '../../components/header';

import './styles.css';

function Coursos() {
    return (
        <>
            <Header />
            <div className="course-title">
                <h1>Bem-vindo(a) a GeekLoad</h1>
            </div>

            <div className='course-container'>
                <h2 className="lead">
                    Cursos em destaque de <a href="">Wordpress</a>
                </h2>
            <div className="carousel-container">
                <section id="projects">
                    <div className="projects-container">
                        <div className="projects">
                            <CourseWordpress />
                        </div>
                    </div>
                </section>
            </div>
            </div>

            <div className='course-container'>
                <h2 className="lead">
                    Cursos relacionados com <a href="">JavaScript</a>
                </h2>
            <div className="carousel-container">
                <section id="projects">
                    <div className="projects-container">
                        <div className="projects">
                            <CourseReact />
                        </div>
                    </div>
                </section>
            </div>
            </div>

            <div className='course-container'>
                <h2 className="lead">
                    Cursos em destaque de <a href="">Desenvolvimento para Android e IOS</a>
                </h2>
            <div className="carousel-container">
                <section id="projects">
                    <div className="projects-container">
                        <div className="projects">
                            <CourseMobile />
                        </div>
                    </div>
                </section>
            </div>
            </div>

            <div className='course-container'>
                <h2 className="lead">
                    Cursos em destaque de <a href="">Desenvolvimento de Games</a>
                </h2>
            <div className="carousel-container">
                <section id="projects">
                    <div className="projects-container">
                        <div className="projects">
                            <CourseJogos />
                        </div>
                    </div>
                </section>
            </div>
            </div>

        </>
    )
}

export default Coursos;

