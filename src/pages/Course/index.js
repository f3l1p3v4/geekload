import React from "react";

import "./styles.css";

const Course = () => (
  <section id="course">
    <h1>Cursos que a DevLoad apoia!</h1>
    <div className="course-container">
      <div className="course-img">
        <img
          src="https://cdn-bbdjb.nitrocdn.com/SRqAcvEIozmnZizAMvLigYTprpWUXBPC/assets/static/optimized/rev-c8d9655/wp-content/uploads/2020/12/PROJETO-CURSO-DESENVOLVEDOR-FULL-STACK-TURBO.jpg"
          alt="Developer Women"
        />
      </div>
      <div className="course-text">
        <h2>Curso Desenvolvedor Full Stack Turbo</h2>
        <span>
          Desenvolva qualquer sistemas, precifique e venda para o seu cliente. O
          treinamento desenvolvedor full stack da TipsCode. Do Zero o avançado
        </span>
        <div className="btn">
          <a
            href="https://go.hotmart.com/N51897315Q"
            target="_blank"
            rel="noreferrer"
          >
            Saber Mais
          </a>
        </div>
      </div>
    </div>
    <hr />
    <div className="course-container">
      <div className="course-img">
        <img
          src="https://cursos.dankicode.com/app/Views/public/mkt/nodejs/images/logo-hero.png"
          alt="Developer Women"
        />
      </div>
      <div className="course-text">
        <h2>Curso NodeJS</h2>
        <span>
          Aprenda tudo sobre NodeJS e criar qualquer aplicação utilizando a
          tecnologia do momento. Iremos do zero ao profissional e serão criados
          3 projetos práticos utilizando banco de dados MongoDB. Comece agora no
          mundo da programação!
        </span>
        <div className="btn">
          <a
            href="https://go.hotmart.com/A52064050M"
            target="_blank"
            rel="noreferrer"
          >
            Saber Mais
          </a>
        </div>
      </div>
    </div>
    <hr />
    <div className="course-container">
      <div className="course-img">
        <img
          src="https://cursos.dankicode.com/app/Views/public/mkt/flutter/img/logo.png"
          alt="Developer Women"
        />
      </div>
      <div className="course-text">
        <h2>Curso de Flutter Completo!</h2>
        <span>
          Neste curso de flutter você irá dominar a criação de apps nativos para
          Android e iOS e terá a capacidade de se tornar um desenvolvedor
          independente de aplicativos.
        </span>
        <div className="btn">
          <a
            href="https://go.hotmart.com/J52057450J"
            target="_blank"
            rel="noreferrer"
          >
            Saber Mais
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Course;
