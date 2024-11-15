import React from 'react';

const WorkItems = ({ item }) => {
  return (
    <div className='card-inner'>
      <div className='work__card' key={item.id}>
        <img src={item.image} alt={item.name} className='work__img' />
        <h3 className='work__title'>{item.name}</h3>

        {/* Description Block */}
        <div className="work__details">
          <p className="work__description">{item.description}</p>
          <p className="work__role"><strong>Role:</strong> {item.role}</p>
          <p className="work__category"><strong>Category:</strong> {item.category}</p>
          <p className="work__technologies"><strong>Technologies:</strong> {item.technologies}</p>
        </div>

        <a href={item.repoLink} className='work__button'>
          Git Repo <i className="uil uil-arrow-right work__button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorkItems;
