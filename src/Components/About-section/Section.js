import React from 'react'; 
import "./Section.css";

function Section() {
  return (
    <div className='about section container' id="#about">
      <h1 className='section__title'>About Me</h1>
      <h3 className='section__subtitle'><span>--------- Here's a bit about me</span></h3>
      <div className='about__description'>
        <p>
          I began my coding journey in 2022 and have developed my skills to an intermediate level in HTML, CSS, JavaScript, and React. I focus on creating intuitive, visually appealing sites with clean, maintainable code.<br /><br />
          Quick Bits About Me:
        </p>
        <ul className='about-list'>
          <li className='nav_item'>
            <i className="uil uil-arrow"></i> 
            Intermediate skills in HTML, CSS, JavaScript, and React.
          </li>
          <li className='nav_item'>
            <i className="uil uil-graduation-cap"></i>
            Currently pursuing a Diploma in Information Technology.
          </li>
          <li className='nav_item'>
            <i className="uil uil-server"></i>
            Exploring Node.js and full-stack development.
          </li>
        </ul>
        
        <p className='about-message'>
          I’m available for freelance work and collaborations. Feel free to reach out, I’d love to connect!
        </p>
      </div>
      <button className='cv-btn'><a href="example.com">Download CV</a></button>
    </div>
  );
}

export default Section;
