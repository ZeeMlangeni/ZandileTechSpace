import React from 'react';
import "./Project.css";

function Project(props) {
  return (
    <div className='project-container'>
      <div className='project-card'>
        <img className='project-img' src={props.image} alt='Project Preview' />
        <div className='project-details'>
          <h2 className='project-title'>{props.name}</h2>
          <p className='project-description'>{props.description}</p>
          <p className='project-tech'>Technologies Used:<br />{props.technologies}</p>
          <div className='project-buttons'>
            <button className='project-btn git-btn'>Git repository</button>
            <button className='project-btn visit-btn'>Visit Site</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
