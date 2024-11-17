import React from 'react';
import './Project.css';
import Works from './Works'

function Project(props) {
  return (

/* project Component */
    <section className='project section' id='projects'>

      <h2 className='section__title '>My Projects</h2>
      <span className='section__subtitle'>Most Recent</span>
      <Works/>
    </section>
   
  );
}

export default Project;
