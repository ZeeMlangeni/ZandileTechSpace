import React from 'react'; 
import "./Section.css";
import AboutImg from '../../Assets/headshot2.png'
import CV from '../../Assets/ZandileCV.pdf'
import Info from './Info'

function Section() {
  return (
    <div className='about section container' id="about">
      <h2 className='section__title'>About Me </h2>
      <span className='section__subtitle'>--------- Here's a bit about me</span>

      <div className='about__container container grid'>

<img src='{AboutImg}' alt="" className='about__img'/>
<div className='about__data'>


<Info/>
<p className='about__description'>
          I began my coding journey in 2022 and have developed my skills to an intermediate level in HTML, CSS, JavaScript, and React. I focus on creating intuitive, visually appealing sites with clean, maintainable code.<br /><br />
          Quick Bits About Me:
        </p>

        <a download='' href={CV} className='btn button--flex'>Download CV</a>

</div>

      </div>










      
    </div>
  );
}

export default Section;
