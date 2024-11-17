import React from 'react';
import './Qualification.css';

function Qualification() {
  return (
 <section className='qualification section'>
      <h2 className="section__title ">Qualification</h2>
      <span className="section__subtitle">My Studies</span>
      <div className='qualification__container container'>
        <div className='qualification__tabs'>
            <div className='qualification__button qualification__active button--flex'>
                <i className='uil uil-graduation-cap qualification__icon'></i>Education
            </div>

            <div className='qualification__button button--flex'>
                <i className='uil uil-briefcase-alt qualification__icon'></i>Experience
            </div>

           
        </div>
      </div>
 </section>
  )
}

export default Qualification