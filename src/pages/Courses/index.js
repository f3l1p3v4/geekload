import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Header from '../../components/header';
import Course from '../../components/course';
import Footer from '../../components/footer';

import './styles.css';

function Coursos() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function loadCourses() {
            const response = await api.get('/courses', {
                headers: {
                    category: "Jogos"
                }
            });

            setCourses(response.data);
        }

        loadCourses();
    }, []);

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
                    {courses.map(course => (
                        <Course key={course._id} course={course} />
                    ))}
                    <a href="#VINGADORES-ULTIMATO-2019-1587910404576.jpg">›</a>
                </section>
            </div>

            <h2 className="course-definition">
                Cursos em destaque de <a href="">Desenvolvimento de android</a>
            </h2>
            <div className="wrapper">
                <section>
                    <a href="#aventura-1587755079908.png">‹</a>
                    {courses.map(course => (
                        <Course key={course._id} course={course} />
                    ))}
                    <a href="#VINGADORES-ULTIMATO-2019-1587910404576.jpg">›</a>
                </section>
            </div>

            <h2 className="course-definition">
                Cursos em destaque de <a href="">Desenvolvimento de Games</a>
            </h2>
            <div className="wrapper">
                <section>
                    <a href="#aventura-1587755079908.png">‹</a>
                    {courses.map(course => (
                        <Course key={course._id} course={course} />
                    ))}
                    <a href="#VINGADORES-ULTIMATO-2019-1587910404576.jpg">›</a>
                </section>
            </div>

            <h2 className="course-definition">
                Cursos em destaque de <a href="">Desenvolvimento de Games</a>
            </h2>
            <div className="wrapper">
                <section>
                    <a href="#aventura-1587755079908.png">‹</a>
                    {courses.map(course => (
                        <Course key={course._id} course={course} />
                    ))}
                    <a href="#VINGADORES-ULTIMATO-2019-1587910404576.jpg">›</a>
                </section>
            </div>

            <h2 className="course-definition">
                Cursos em destaque de <a href="">Desenvolvimento de Games</a>
            </h2>
            <div className="wrapper">
                <section>
                    <a href="#aventura-1587755079908.png">‹</a>
                    {courses.map(course => (
                        <Course key={course._id} course={course} />
                    ))}
                    <a href="#VINGADORES-ULTIMATO-2019-1587910404576.jpg">›</a>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Coursos;

