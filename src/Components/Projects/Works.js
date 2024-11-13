import React, { useEffect, useState } from 'react';
import './Works.css';
import { projectData } from './Datas';
import { projectNav } from './Datas';
import WorkItems from './WorkItems'; // Make sure this is correctly imported

const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2); // Start with 2 items visible
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
    setVisibleCount(2); // Reset visible count when changing category
    setShowAll(false); // Reset "View All" state
  };

  const toggleViewAll = () => {
    if (showAll) {
      setVisibleCount(2); // Show only the first 2 items
    } else {
      setVisibleCount(projects.length); // Show all projects
    }
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className='work__filters'>
        {projectNav.map((item, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`work__item ${active === index ? 'active-work' : ''}`}
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

      {/* Show the button even if there are fewer than 4 items */}
      {projects.length > 2 && (
        <button onClick={toggleViewAll} className='view-all-button'>
          {showAll ? 'Show Less' : 'View All'}
        </button>
      )}
    </div>
  );
};

export default Works;
