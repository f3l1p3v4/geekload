import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import estrela from '../../assets/estrela.jpg';

export default function Courses() {
    const [courses, setCourses] = useState([]);
    const category = "Jogos";

    useEffect(() => {
        async function loadCourses() {
            const response = await api.get('/courses', {
                headers: { category }
            });

            setCourses(response.data);
        }

        loadCourses();
    }, []);

    return (
        <>
            {courses.map(course => (
                <div key={course._id} className="item" id={course.image}>
                    <div className="course-image">
                        <img src={course.image_url} />
                    </div>
                    <div className="classificacao">
                        <img src={estrela} alt="" />
                    </div>
                    <header>
                        <div className="course-info">
                            <strong>{course.name}</strong>
                            {/* <span>{course.description}</span> */}
                            <div className="price">
                                <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(course.priceCurrent)}</p>
                                {/* <s>
                                    <p style={{ fontWeight: 400, color: '#c43131', opacity: 0.5 }}> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(course.pricePrevious)}</p>
                                </s> */}
                            </div>
                            <div className="instructor">
                                <p>{course.pricePortion}</p>
                            </div>
                        </div>
                    </header>
                </div>
            ))}
        </>
    );
}
