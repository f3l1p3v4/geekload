import React, { useState, useEffect } from 'react';
import api from '../services/api';

import Slider from '../components/Slider'
import Course from '../components/course'

function Coursos() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function loadCourses() {
            const response = await api.get('/courses', {
                headers: {
                    category: "Jogos"
                }
            });

            let data = response.data;

            data.pop();

            setCourses(response.data);
        }

        loadCourses();

    }, []);
    
    return (
        <>
            <div>
                <Slider />
            </div>

            <div className="course">
                <div className="course-title">
                    <h1>Bem-vindo(a) a GeekLoad</h1>
                </div>

                <h2 className="course-definition">
                    Cursos em destaque de <a href="/">Desenvolvimento de Games</a>
                </h2>
                <div className="wrapper">
                    <section>
                        {/* <a href="#aventura-1587755079908.png">‹</a> */}
                        {courses.map(course => (
                            <Course key={course._id} course={course} />
                            ))}
                        {/* <a href="#VINGADORES-ULTIMATO-2019-1587910404576.jpg">›</a> */}
                    </section>
                </div>

                <h2 className="course-definition">
                    Cursos em destaque de <a href="/">Desenvolvimento de Games</a>
                </h2>
                <div className="wrapper">
                    <section>
                        {/* <a href="#aventura-1587755079908.png">‹</a> */}
                        {courses.map(course => (
                            <Course key={course._id} course={course} />
                            ))}
                        {/* <a href="#VINGADORES-ULTIMATO-2019-1587910404576.jpg">›</a> */}
                    </section>
                </div>
            </div>
        </>
    )
}

export default Coursos;

