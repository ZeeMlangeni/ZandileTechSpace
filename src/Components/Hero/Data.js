import React from 'react';

function Data() {
  return (
    <section className='hero'>
      <h1 className='hero__title'>
        Driven by Purpose, Empowered by Tech
      </h1>
      <p className='hero__description'>
        I'm Zandile, a front-end developer in training who believes technology can be a force for good. Through every line of code, I’m learning how to create impactful, engaging digital experiences—and I’m just getting started.
      </p>
      <p className='hero__description'>
        From HTML to React, my journey is all about growth, curiosity, and using tech to uplift lives. Grateful for every opportunity to learn, build, and make a difference. Let's bring the future to life, one project at a time.
      </p>
      
      <div className='reach-me'>
        <button className='hero-button'>
          Explore My Work
        </button>
        <span className="avail-dot">
          <span className="dot"></span>
          <p>Available now</p>
        </span>
      </div>
    </section>
  );
}

export default Data;
