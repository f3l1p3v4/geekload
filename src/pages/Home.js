import React from "react";

import Presentation from "../components/Presentation";
import Information from "../components/Information";
import Payment from "../components/Payment";
import Important from "../components/Important";
import Exclusive from "../components/Exclusive";

function Home() {
  return (
    <>
      <div className="home_container">
        <Presentation />
        <Information />
        <Payment />
        <Important />
        <Exclusive />
      </div>
    </>
  );
}

export default Home;
