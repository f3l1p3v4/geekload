import React, { useState } from "react";
import api from "../../services/api";

import chat from "../../assets/chat.svg";

import "./styles.css";

function Exclusive({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    api.post("/spots", { name, email });

    await onSubmit({
      name,
      email
    });
  }

  return (
    <>
      <div className="exclusive">
        <section className="exclusive-section">
          <div className="image">
            <img src={chat} alt="Notificação" />
          </div>

          <div className="text">
            <h1>Fique por dentro!</h1>
            <h3>
              Saiba em primeira mão sempre que surgir novidades sobre os cursos.
            </h3>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Nome"
                className="exclusive-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className="exclusive-input"
                type="email"
                placeholder="Digite seu melhor E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button className="exclusive-button" type="submit">
                Enviar
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Exclusive;
