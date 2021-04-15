import React from "react";

import "./styles.css";

import contact from "../../assets/contact.svg";

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="content">
          <section>
            <img src={contact} alt="Contact" />
          </section>

          <form onSubmit={() => {}}>
            <h1>Fale conosco!</h1>
            <p>
              Se tiver alguma duvida é só pergundar! A equipe da{" "}
              <strong>DevLoad</strong> te ajudará o mais rápido possível 😊 nos
              conte o que achou da DevLoad, para podermos melhorar ainda mais.
            </p>
            <input
              placeholder="Nome Completo*"
              // value={name}
              // onChange={e => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="E-mail*"
              // value={email}
              // onChange={e => setEmail(e.target.value)}
            />
            <input
              placeholder="Assunto*"
              // value={whatsapp}
              // onChange={e => setWhatsapp(e.target.value)}
            />
            <textarea
              placeholder="Mensagem"
              // value={description}
              // onChange={e => setDescription(e.target.value)}
            />

            <button className="button" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
