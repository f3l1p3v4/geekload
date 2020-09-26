import React from 'react';

import Presentation from '../components/presentation';
import SubPresentation from '../components/subPresentation';
import Categories from '../components/categories';
import Purchase from '../components/purchase';
import Exclusive from '../components/exclusive';

function Home() {
  return (
    <>  
      <div className="home-container">
        <Presentation />
        <SubPresentation />
        <Categories />
        <Purchase />
        <Exclusive />
      </div>
    </>
  );
}

export default Home;