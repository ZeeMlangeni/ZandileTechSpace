import React from 'react'
import "./Skills.css"
import Languages from './Icons/Languages'
import Framework from './Icons/Framework'
import Tools from './Icons/Tools'
import Soft from './Icons/Soft'

function Skills() {
  return (
    <div className='skills section container ' id="skills">

<h1 className='skills__title'>My Skills</h1>

<div className='row'>
  
<Languages/>
<Framework/>
<Tools/>
<Soft/>
</div>



</div>

   
  )
}

export default Skills