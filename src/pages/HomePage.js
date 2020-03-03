import React, { useContext, useEffect } from "react";
import Home from "../components/Home";

import Hero from "../components/Hero";

import { AuthContext } from "../context/AuthContext";

const HomePage = props => {
  return (
    <div className="home-div">
      <Hero history={props.history} />
    </div>
  );
};

export default HomePage;
