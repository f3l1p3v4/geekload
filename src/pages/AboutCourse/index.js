import React from 'react';
import ReactPlayer from 'react-player';

import './styles.css';

import {
  AiOutlineStar,
  AiOutlinePaperClip,
  AiOutlineSafetyCertificate
} from 'react-icons/ai';
import { GiStopwatch } from 'react-icons/gi';
import { GoRocket } from 'react-icons/go';
import { FiMessageCircle } from 'react-icons/fi';


import Header from '../../components/header';
import Footer from '../../components/footer';

function AboutCourse() {
  return (
    <>
      <Header />
      <div className="about-course">
      <div className="about-course-container">
        <div className="about-course-content">
          <div className="player-wrapper">
            <ReactPlayer url='https://youtu.be/aTH8CW17hDM'
              className='react-player'
              config={{
                youtube: {
                  playerVars: { showinfo: 1 }
                },
                //   youtube: {
                //     playerVars: {
                //       start: this.state.startSecond,
                //       end: this.state.endSecond,
                //     }
                //   }
              }}
              // loop
              // playbackRate={this.state.playbackRate}
              // playing
              width="100%"
            />
          </div>
          <article className="about-course-info">
            <div>
              <div className="flex-col">
                <div className="flex justify-between">
                  <h1>Curso Criação de Jogos do ZERO</h1>
                </div>
                <div className="mt-16">
                  <div className="about-price">
                    <p>
                      <span className="text-red-1">R$</span>
                      <span className="text-red-2">69,99</span>
                    </p>
                  </div>
                  <div class="about-price">
                    <span class="text-gray-dark">Preço Regular</span>
                    <span class="text-gray-dark-bold">R$ 279</span>
                  </div>
                  <div class="about-price">
                    <span className="text-gray-dark2">Economize</span>
                    <span className="text-gray-dark2">R$209.01 (74%)</span>
                  </div>
                  <a href="https://pay.hotmart.com/H11831014O?checkoutMode=0&bid=1590880141721" className="btn" >Compre agora</a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <section className="content-info">
        <h1>Informação</h1>
        <div className="main-items">
          <div className="items">
            <div className="item">
              <div className="item-icon">
                <AiOutlineStar />
              </div>
              <span>Comece e termine no seu tempo</span>
            </div>
            <div className="item">
              <div className="item-icon">
                <AiOutlinePaperClip />
              </div>
              <span>75 aulas mais anexos</span>
            </div>
            <div className="item">
              <div className="item-icon">
                <GiStopwatch />
              </div>
              <span>30 horas de vídeo aulas online</span>
            </div>
          </div>
          <div className="items">
            <div className="item">
              <div className="item-icon">
                <GoRocket />
              </div>
              <span>Desenvolva 4 projetos reais</span>
            </div>
            <div className="item">
              <div className="item-icon">
                <AiOutlineSafetyCertificate />
              </div>
              <span>Você receberá um certificado de conclusão</span>
            </div>
            <div className="item">
              <div className="item-icon">
                <FiMessageCircle />
              </div>
              <span>Você receberá todo o suporte necessário</span>
            </div>
          </div>
        </div>
        <h1>Você vai aprender</h1>
        <div className="description">
          <p>Este é um curso para aprender a usar o Adobe Illustrator do zero! Nessas aulas, você aprenderá das ferramentas mais básicas às mais avançadas do programa.
          O projeto final será uma ilustração contemporânea usando várias ferramentas do Adobe Illustrator. Você realizará diferentes exercícios criativos para desenvolver seu olhar de designer e aprender a integrar suas ilustrações em seus projetos de design gráfico.</p>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutCourse;
