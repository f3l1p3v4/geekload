import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import logo from '../../assets/netflix.png';

import './styles.css';

function Coursos() {
    const [courses, setCourses] = useState([]);
    const category = "teste";

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
            <img src={logo} alt="" />
            <div className="wrapper">
                <section>
                <a href="#0">‹</a>
                {courses.map(course => (
                    <>
                            <div key={course._id} id={course.priceCurrent} className="item">
                                <div className="course-image">
                                    <img src={course.image_url} />
                                </div>
                            </div>
                    </>
                ))}
                <a href="#8">›</a>
                </section>
            </div>
        </>
    )
}

export default Coursos;


