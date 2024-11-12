import React from 'react'; 
import "./Section.css";
import AboutImg from '../../Assets/headshot2.png'
import CV from '../../Assets/ZandileCV.pdf'
import Info from './info'

function Section() {
  return (
    <div className='about section container' id="about">
      <h2 className='section__title'>About Me </h2>
      <span className='section__subtitle'>--------- Here's a bit about me</span>

      <div className='about__container container grid'>

<img src='{AboutImg}' alt="" className='about__img'/>
<div className='about__data'>

</div>

      </div>










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
      <button className='cv-btn'>
  <a href="/ZandileCV.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
</button>

    </div>
  );
}

export default Section;
