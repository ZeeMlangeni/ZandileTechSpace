import React from 'react';

function Data() {
  return (
    <div className='home__data'>
      <h1 className='home__title'>
        Hi, I'm <span className='letter'>Zandile</span>,<br />
        <span className='letter'>Front-End</span> Developer
      </h1>
      <p className='home__description'>
      I’m learning how to create impactful, engaging digital experiences and I’m just getting started. From HTML to React, my journey is all about growth, curiosity, and using tech to uplift lives. Grateful for every opportunity to learn, build, and make a difference. (Don’t worry, I’m not a “404” I’m here and ready to build something amazing!)


      </p>

      <div className='reach-me'>
        <button className='Touch-btn'    onClick={() => {
      const contactForm = document.getElementById('form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
      }
    }}>
        Contact me
          <svg className="send-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="message">
            <path fill="#ffffff" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"></path>
          </svg>
        </button>
        <span className="avail-dot">
          <span className="dot"></span>
          <p>Available now</p>
        </span>
      </div>
    </div>
  );
}

export default Data;
