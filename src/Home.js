import React from 'react';

import './components/styles/global.css';

import Presentation from './components/presentation';
import Header from './components/header';

function Home() {
  return (
    <>
      <Header />
      <Presentation />
    </>
  );
}

export default Home;