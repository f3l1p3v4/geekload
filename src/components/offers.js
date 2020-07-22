import React, { useState, useEffect } from "react";
import api from '../services/api';

import Course from './course';

function Offers() {
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

                setCourses(data);

            }
    
            loadCourses();

    
        }, []);

        return (
            <>
            <div className="offers">
                <h1>Ofertas do Dia</h1>
                <section className="offers-section">
                    {courses.map(course => (
                        <Course key={course._id} course={course} />
                    ))}
                </section>
            </div>
            </>
        )
}

export default Offers;