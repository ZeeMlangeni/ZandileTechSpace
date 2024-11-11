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
      <div className="skills__block">
        <div className="skills__category">
          <h3 className="skills__category-title">Languages</h3>
          <Languages />
        </div>
        <div className="skills__category">
          <h3 className="skills__category-title">Frameworks</h3>
          <Framework />
        </div>
      </div>
      <div className="skills__block">
        <div className="skills__category">
          <h3 className="skills__category-title">Tools</h3>
          <Tools />
        </div>
        <div className="skills__category">
          <h3 className="skills__category-title">Soft Skills</h3>
          <Soft />
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Skills;
