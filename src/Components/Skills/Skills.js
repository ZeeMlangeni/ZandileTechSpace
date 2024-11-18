import React from "react";
import "./Skills.css";
import Technical from "./Technical";
import Soft from "./Soft";
/* import Languages from './Icons/Languages';
import Framework from './Icons/Framework';
import Tools from './Icons/Tools';
import Soft from './Icons/Soft'; */

function Skills() {
  return (
    <div className="skills section hidden" id="skills">
      <h2 className="section__title">My Skills</h2>
      <span className="section__subtitle">
      A showcase of my technical expertise, tools, and essential soft skills for building amazing things.
      </span>
      <div className="skills__container container grid">
        <Technical />
        <Soft />
      </div>
    </div>
  );
}

export default Skills;
