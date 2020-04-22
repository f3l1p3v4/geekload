import React, { useState, useEffect } from 'react';
import { FaUserAlt } from 'react-icons/fa';

import api from '../../services/api';

import estrela from '../../assets/estrela.jpg';

export default function Courses() {
    const [courses, setCourses] = useState([]);
    const category = "Mobile";

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
                <div className="project" key={course._id}>
                    <div className="project-image">
                        <img src={ course.image_url } />
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
                            <strong>{course.name}</strong>
                            <span>{course.description}</span>
                            <div className="price">
                                <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(course.priceCurrent)}</p>
                                <s>
                                    <p style={{ fontWeight: 400, color: '#c43131', opacity: 0.5 }}> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(course.pricePrevious)}</p>
                                </s>
                            </div>
                            <div className="instructor">
                                <FaUserAlt />
                                <p>{course.pupil} Alunos</p>
                            </div>
                        </div>
                    </header>
                </div>
            ))}
        </>
    );
}
