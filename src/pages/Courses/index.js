import React from 'react';

import CourseReact from '../../components/Courses/courseReact'; 
import CourseWordpress from '../../components/Courses/courseWordpress'; 
import Header from '../../components/header';

import './styles.css';

function Coursos() {
    return (
        <>
            <Header />
            <div className="course-title">
                <h1>Bem-vindo(a) a DevLoad</h1>
            </div>
            <div className='course-container'>
                <h2 className="lead">
                    Cursos em destaque de <a href="">Desenvolvimento para Android</a>
                </h2>
                <section id="projects">
                    <div className="projects-container">
                        <div className="projects">
                            <CourseReact />
                        </div>
                    </div>
                </section>
            </div>

            <div className='course-container'>
                <h2 className="lead">
                    Cursos em destaque de <a href="">Wordpress</a>
                </h2>
                <section id="projects">
                    <div className="projects-container">
                        <div className="projects">
                            <CourseWordpress />
                        </div>
                    </div>
                </section>
            </div>




        </>
    )
}

export default Coursos;

