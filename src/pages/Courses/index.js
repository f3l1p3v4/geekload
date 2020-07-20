import React, { useState, useEffect, useRef } from 'react';
import api from '../../services/api';

import Header from '../../components/header';
import Course from '../../components/course';
import Footer from '../../components/footer';

import slide1 from '../../assets/featured/slide1.jpg';
import slide2 from '../../assets/featured/slide2.jpg';


import './styles.css';

function Coursos() {
    const [courses, setCourses] = useState([]);
    const [images, setImages] = useState([]);

    const wrapperRef = useRef(null);

    useEffect(() => {

        const currentImages = Array.from(wrapperRef.current.children);

        setImages(currentImages);

    }, []);

    let time = 5000,
        currentImageIndex = 0,
        max = images.length;

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

    function nextImage() {

        // console.log(images[1])

        // images[currentImageIndex].classList.remove("selected");

        // currentImageIndex++

        // if (currentImageIndex >= max)
        //     currentImageIndex = 0

        // images[currentImageIndex].classList.add("selected");
    }

    function start() {
        setInterval(() => {
            // troca de image
            nextImage()
        }, time)
    }

    window.addEventListener("load", start)

    return (
        <>
            <Header />

            <div>
                <div ref={wrapperRef} id="slider">
                    <img className="selected" src={slide2} />
                    <img src={slide2} />
                </div>
            </div>

            <div className="course-title">
                <h1>Bem-vindo(a) a GeekLoad</h1>
            </div>

            <h2 className="course-definition">
                Cursos em destaque de <a href="">Desenvolvimento de Games</a>
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
            <Footer />
        </>
    )
}

export default Coursos;

