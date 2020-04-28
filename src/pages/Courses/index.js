import React from 'react';

import CourseFrontend from '../../components/Courses/courseFrontend';
import CourseBackend from '../../components/Courses/courseBackend';
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
            <h2 className="course-definition">
                Cursos em destaque de <a href="">Desenvolvimento de Games</a>
            </h2>
            <div className="wrapper">
                <section>
                    <a href="#aventura-1587755079908.png">‹</a>
                        <CourseJogos />
                    <a href="#VINGADORES-ULTIMATO-2019-1587910404576.jpg">›</a>
                </section>
            </div>
        </>
    )
}

export default Coursos;

