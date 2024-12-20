import React, { useEffect, useState } from 'react';
import './Works.css';
import { projectData } from './Datas'; 
import { projectNav } from './Datas';
import WorkItems from './WorkItems';  

const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2); 
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectData);
    } else {
      const newProjects = projectData.filter((project) => project.category === item.name);
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
    setVisibleCount(2); 
    setShowAll(false); 
  };

  const toggleViewAll = () => {
    if (showAll) {
      setVisibleCount(2); 
    } else {
      setVisibleCount(projects.length); 
    }
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className='work__filters'>
        {projectNav.map((item, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`${active === index ? 'active-work' : ''} work__item `}
            key={index}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className='work__container container grid'>
        {projects.slice(0, visibleCount).map((item) => (
          <WorkItems item={item} key={item.id} />  
        ))}
      </div>

    
      {projects.length > 2 && (
        <button onClick={toggleViewAll} className='view-all-button button button--flex'>
          {showAll ? 'Show Less' : 'View All'}
        </button>
      )}
    </div>
  );
};

export default Works;
