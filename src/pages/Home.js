import React from 'react';

import Header from '../components/header';
import Presentation from '../components/presentation';
import SubPresentation from '../components/subPresentation';
import Categories from '../components/categories';
import Purchase from '../components/purchase';
import Exclusive from '../components/exclusive';
import Footer from '../components/footer';

function Home() {
  return (
    <>  
      <Header/>
        <div className="home-container">
          <Presentation />
          <SubPresentation />
          <Categories />
          <Purchase />
          <Exclusive />
        </div>
      <Footer />
    </>
  );
}

export default Home;