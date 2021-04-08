import React from "react";

import Presentation from "../components/Presentation";
import Information from "../components/Information";
import Payment from "../components/Payment";
import Exclusive from "../components/Exclusive";

function Home() {
  return (
    <>
      <div className="home_container">
        <Presentation />
        <Information />
        <Payment />
        <Exclusive />
      </div>
    </>
  );
}

export default Home;
