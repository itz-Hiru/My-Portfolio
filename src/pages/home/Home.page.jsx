import React from "react";
import Social from "../../components/home/Social.component";
import Data from "../../components/home/Data.component";
import ScrollDown from "../../components/home/ScrollDown.component";
import "./Home.page.css";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
