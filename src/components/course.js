import React from 'react';

import estrela from '../assets/estrela.jpg';

export default function Courses({ course }) {
    return (
        <>
                <div className="item" id={course.image}>
                    <div className="course-image">
                        <img src={course.image_url} />
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
                        Mais vendidos
                    </div>
                </div>
        </>
    );
}

{/* <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(course.priceCurrent)}</p>
<s>
    <p style={{ fontWeight: 400, color: '#c43131', opacity: 0.5 }}> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(course.pricePrevious)}</p>
</s> */}