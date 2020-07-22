import React from 'react';

import './styles.css';

import Header from '../../components/header';
import Slider from '../../components/Slider';
import Presentation from '../../components/presentation';

function Home() {
  return (
    <>
      <Header/>

      <div className="slider"> 
        <Slider />
      </div>

      <Presentation />
    </>
  );
}

export default Home;
