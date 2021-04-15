import React from "react";

import "./styles.css";

import QuemSomos from "../../assets/quem_somos.png";

export default function Contact() {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <section>
            <img src={QuemSomos} alt="Quem somos" />
          </section>

          <div className="about-text">
            <div>
              <section>
                <h1>QUEM SOMOS</h1>
                <p>
                  A DevLoad é uma dos maiores realizadores de sonhos do Mercado
                  Digital de Aprendizado e Instrução. Trata-se de uma empresa
                  que visa conectar estudantes de desenvolvimento e tudo
                  relacionado a tecnologia com escolas renomadas na área, afinal
                  estamos vivendo na "era" da tecnologia onde empresas e pessoas
                  respiram isso.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="about-info">
        <section>
          <h1>Missão</h1>
          <p>
            Transformar os sonhos de nossos clientes em realidade, fornecendo
            infoprodutos de qualidade, através de cursos profissionalizantes.
          </p>
        </section>

        <section>
          <h1>Visão</h1>
          <p>
            Ser a melhor empresa de conexão de alunos com educares e com isso
            proporcionar a mudança de vida no Brasil.
          </p>
        </section>
      </div>
    </>
  );
}
