import React from 'react';

import './styles.css';

import Header from '../../components/header';

import Information from '../../assets/information.png';

export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="content">
          <section>
            <img src={Information} alt="Contact" />

            <h1>Fale conosco</h1>
            <p>Fale o que achou da <strong style={{color: '#feb92e'}}>DevLoad</strong> e nos conte se podemos melhorar para juntos mudarmos a vida de muitos.</p>
          </section>

          <form onSubmit={() => { }}>
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

            <button className="button" type="submit" >Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
}
