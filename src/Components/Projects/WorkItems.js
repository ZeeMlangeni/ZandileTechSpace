import React from 'react';

const WorkItems = ({ item }) => {
  return (
    <div className='card-inner'>
      <div className='work__card' key={item.id}>
        <img src={item.image} alt='product-image' className='work__img'/>
        <h3 className='work__title'>{item.name}</h3>
        <a href="#" className='work__button'>
          Git Repo <i className="uil uil-arrow-right work__button-icon"></i>
        </a>
      </div>
    </div>
  );
}

export default WorkItems;
