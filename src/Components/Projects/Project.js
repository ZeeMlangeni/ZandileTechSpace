import React from 'react'
import "./Project.css"

function Project(props) {
  return (
    <div className='project section container'>



<div className='project__card gird'>
  
<img className="projectImg"src={props.image} alt='image-of-project'></img>
      <h2 className='project__title'>{props.name}</h2>
      <p className='project__desc'>{props.description}</p>
      <p className='techs'>Technologies Used<br/>{props.technologies}</p>
      <button className='git-btn'>Git repository</button>
      <button className='visit-btn'>Visit Site</button>
   
</div>

    </div>

  )
}

export default Project