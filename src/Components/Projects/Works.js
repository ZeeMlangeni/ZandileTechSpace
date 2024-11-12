import React from 'react'

import {projectData} from './Datas'
import { projectNav } from './Datas'

const Works=()=> {

  return (

   <div>
     <div className='work__fliters'>
        {projectNav.map((item,index)=>{
            return (
                <span className='work__item'>{item.name}</span>
            )
        })}
    </div>

    <div className='work__container container grid'>

{projectData.map((item)=>  {

    return <WorkItems/>
})}
    </div>
   </div>

  )
}

export default Works