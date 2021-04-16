import React from "react";

import courses from "../../data/courses.json";

import "./styles.css";

const Course = () => (
  <section id="course">
    <h1>Cursos que a DevLoad apoia!</h1>
    {courses.map((course) => (
      <div className="course-container" key={course.id}>
        <div className="course-img">
          <img src={course.image} alt={course.alt} />
        </div>
        <div className="course-text">
          <h2>{course.title}</h2>
          <span>{course.description}</span>
          <div className="btn">
            <a href={course.link} target="_blank" rel="noopener noreferrer">
              Saber Mais
            </a>
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default Course;
