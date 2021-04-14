import React from "react";

import Presentation from "../components/Presentation";
import About from "../components/About";
import Information from "../components/Information";
import Important from "../components/Important";
import Skills from "../components/Skills";
import Exclusive from "../components/Exclusive";

function Home() {
  return (
    <>
      <div className="home_container">
        <Presentation />
        <About />
        <Information />
        <Important />
        <Skills />
        <Exclusive />
      </div>
    </>
  );
}

export default Home;
