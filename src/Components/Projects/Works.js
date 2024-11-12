import React, { useEffect, useState } from 'react'
import './Works.css'

import {projectData} from './Datas'
import { projectNav } from './Datas'
import WorkItems from './WorkItems'

const Works=()=> {
    const [item ,setItem] =useState({name: 'all'})
    const [projects, setProjects]=useState([])
    const [active,setActive] =useState(0)

    useEffect(() =>{
        if (item.name === 'all'){
            setProjects(projectData)
        }

        else {
            const newProject =projectData.filter((project)=>{
                return project.category === item.name;
            });
            setProjects(newProject)
        }
    },[item]);

    const handleClick=(e,index)=>{
        setItem({name: e.target.textContent});
    }
  return (

   <div>
     <div className='work__filters'>
        {projectNav.map((item,index)=>{
            return (
                <span onClick={(e)=>{
                    handleClick (e,index)
                }} className='work__item'>{item.name}</span>
            )
        })}
    </div>

    <div className='work__container container grid'>

{projects.map((item)=>  {

    return <WorkItems  item ={item} key={item.id}/>
})}
    </div>
   </div>

  )
}

export default Works