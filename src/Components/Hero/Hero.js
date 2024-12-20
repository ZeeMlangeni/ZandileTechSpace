import React from "react";
import "./Hero.css";
import Socials from "./Socials";
import headshot from "../../Assets/1.jpg";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

function Hero() {
  return (
    /*     hero container with imported scrolldown and data component */
    <section className="hero section" id="hero">
      <div className="home___container container grid">
        <div className="home___content grid">
          <Socials />
          <img className="headshot-img" src={headshot} alt="image-of-me"></img>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Hero;
