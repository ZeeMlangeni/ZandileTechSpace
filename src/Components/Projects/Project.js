import React from 'react';
import './Project.css';

function Project(props) {
  return (
    <div className='project-section-container'>
      <div className='cards'>
        <div className='cards_item'>
          <div className='card'>
            <img className="projectImg" src={props.image} alt="image-of-project" />
            <div className="card_content">
              <h2 className="card_title">{props.name}</h2>
              <p className="card_text">{props.description}</p>
              <p className="techs">
                Technologies Used<br />{props.technologies}
              </p>
              <div className="buttons">
  <a href={props.gitUrl} target="_blank" rel="noopener noreferrer">
    <button className="btn git-btn">Git repository</button>
  </a>
  <a href={props.siteUrl} target="_blank" rel="noopener noreferrer">
    <button className="btn visit-btn">Visit Site</button>
  </a>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
