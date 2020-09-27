import React from 'react';

import estrela from '../assets/estrela.jpg';

export default function Courses({ course }) {
    return (
        <>
            <div className="item" id={course.image}>
                <a href="/aboutCourse">
                    <div className="course-image">
                        <img src={course.image_url} alt={course.image} />
                    </div>
                    <div className="classificacao">
                        <img src={estrela} alt="" />
                    </div>
                    <header>
                        <div className="course-info">
                            <p>{course.name}</p>
                            <div className="instructor">
                                <span>Felipe Valdez</span>
                            </div>
                        </div>
                    </header>
                    <div className="position">
                        <p>Mais vendidos</p>
                    </div>
                    {/* <s>
                        <p style={{ fontWeight: 400, color: '#c43131', opacity: 0.5 }}> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(course.pricePrevious)}</p>
                    </s> */}
                </a>
            </div>
        </>
    );
}

