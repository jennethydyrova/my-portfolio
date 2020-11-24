import React, { useState } from "react";
import HomeMainInfo from "../../components/HomeMainInfo";
import TechnologyHome from "../../components/Technologies";
import "./index.scss";

const Home = () => {
  return (
    <div>
      <HomeMainInfo />
      <TechnologyHome />
    </div>
  );
};

export default Home;
