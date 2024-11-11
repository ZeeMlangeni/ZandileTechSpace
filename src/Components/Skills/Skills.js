import React from 'react';
import './Skills.css';
import Languages from './Icons/Languages';
import Framework from './Icons/Framework';
import Tools from './Icons/Tools';
import Soft from './Icons/Soft';

function Skills() {
  return (
    <div className="skills section container" id="skills">
      <h1 className="skills__title">My Skills</h1>
      <p className="skills__description">
        Here's a collection of my technical expertise and the tools I use to build amazing things.
      </p>
      <div className="skills__icons">
        <div className="skills__icon">
          <Languages />
          <h3>Languages</h3>
        </div>
        <div className="skills__icon">
          <Framework />
          <h3>Frameworks</h3>
        </div>
        <div className="skills__icon">
          <Tools />
          <h3>Tools</h3>
        </div>
        <div className="skills__icon">
          <Soft />
          <h3>Soft Skills</h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
