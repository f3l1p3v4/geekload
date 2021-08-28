import React from "react";

import courses from "../../data/courses.json";

import "./styles.css";

const Course = () => (
  <section id="course">
    <div className="course-presentation">
      <div className="course-title-presentation">
        <h1>Cursos que a DevLoad apoia!</h1>
        <p>
          Criado para te preparar para o mercado, desenvolvendo skills técnicas
          e comportamentais. Evolua e certifique-se em Elixir, Flutter, Node.js,
          ReactJS ou React Native.
        </p>
      </div>
    </div>
    <div className="course-content-title">
      <h1 className="course-title">Desenvolvimento Web </h1>
      <span className="course-line" />
    </div>
    <div className="content-course">
      {courses.map((course) => (
        <a
          href={course.link}
          target="_blank"
          rel="noopener noreferrer"
          className="course-container"
          key={course.id}
        >
          <h2>{course.title}</h2>
          <div className="course-img">
            <img src={course.image} alt={course.alt} />
          </div>
          <div className="course-text">
            <span>{course.description}</span>
            <div className="course-text-info">
              <div>
                <h3>Número de aulas</h3>
                <span>{course.classes} aulas</span>
              </div>
              <div>
                <h3>Duração</h3>
                <span>{course.duration}</span>
              </div>
            </div>
            <div className="btn">
              <a href={course.link} target="_blank" rel="noopener noreferrer">
                Saber Mais
              </a>
            </div>
          </div>
        </a>
      ))}
    </div>

    <div className="course-content-title">
      <h1 className="course-title">Hacker</h1>
      <span className="course-line" />
    </div>

    <div className="content-course">
      {courses.map((course) => (
        <a
          href={course.link}
          target="_blank"
          rel="noopener noreferrer"
          className="course-container"
          key={course.id}
        >
          <h2>{course.title}</h2>
          <div className="course-img">
            <img src={course.image} alt={course.alt} />
          </div>
          <div className="course-text">
            <span>{course.description}</span>
            <div className="course-text-info">
              <div>
                <h3>Número de aulas</h3>
                <span>{course.classes} aulas</span>
              </div>
              <div>
                <h3>Duração</h3>
                <span>{course.duration}</span>
              </div>
            </div>
            <div className="btn">
              <a href={course.link} target="_blank" rel="noopener noreferrer">
                Saber Mais
              </a>
            </div>
          </div>
        </a>
      ))}
    </div>

    <div className="course-content-title">
      <h1 className="course-title">Desenvolvimento de Games</h1>
      <span className="course-line" />
    </div>

    <div className="content-course">
      {courses.map((course) => (
        <a
          href={course.link}
          target="_blank"
          rel="noopener noreferrer"
          className="course-container"
          key={course.id}
        >
          <h2>{course.title}</h2>
          <div className="course-img">
            <img src={course.image} alt={course.alt} />
          </div>
          <div className="course-text">
            <span>{course.description}</span>
            <div className="course-text-info">
              <div>
                <h3>Número de aulas</h3>
                <span>{course.classes} aulas</span>
              </div>
              <div>
                <h3>Duração</h3>
                <span>{course.duration}</span>
              </div>
            </div>
            <div className="btn">
              <a href={course.link} target="_blank" rel="noopener noreferrer">
                Saber Mais
              </a>
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Course;
