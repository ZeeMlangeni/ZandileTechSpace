import React, { useState, useEffect } from 'react';

function Data() {
  const fullText = "Hi, I'm Zandile, Front-End Developer"; // Text to be typed out
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 100; // Typing speed in milliseconds

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prevText) => prevText + fullText[index]);
        index++;
      } else {
        clearInterval(typingInterval); // Stop typing once the text is fully displayed
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval); // Clean up interval on unmount
  }, []);

  return (
    <div className='home__data'>
      <h1 className='home__title'>
        {displayedText} {/* Typing animation applied here */}
      </h1>
      <p className='home__description'>
        I’m on a journey to create impactful, engaging digital experiences—starting with HTML and growing through React. Driven by curiosity and a passion for using tech to uplift lives, I’m ready to build and make a difference. (No “404” here—just a builder ready to create something amazing!)
      </p>

      <div className='reach-me'>
        <button className='Touch-btn' onClick={() => {
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
