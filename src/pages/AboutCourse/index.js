import React from 'react';
import ReactPlayer from 'react-player';

import './styles.css';

import Header from '../../components/header';
import Footer from '../../components/footer';

function AboutCourse() {
  return (
    <>
      <Header />
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
            <div style={{ padding: 32 }}>
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
      <Footer />
    </>
  );
}

export default AboutCourse;