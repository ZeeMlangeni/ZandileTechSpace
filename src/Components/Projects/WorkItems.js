import React from 'react';
import './WorkItems.css'; // Make sure to create or update this CSS file with the styles below
import './'

const WorkItems = ({ item }) => {
  return (
    <div className='work__card' key={item.id}>
      <div className="card-inner">
        {/* Front of the card */}
        <div className="card-front">
          <img src={item.image} alt="product-image" className="work__img" />
          <h3 className="work__title">{item.name}</h3>
        </div>
        {/* Back of the card */}
        <div className="card-back">
          <p>{item.description}</p>
          <a href={item.github} target="_blank" rel="noopener noreferrer" className="work__button">
            Git Repo <i className="uil uil-arrow-right work__button-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItems;
