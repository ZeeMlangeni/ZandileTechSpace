import React, { useEffect } from 'react';
import './Skills.css';
import Technical from './Technical';
import Soft from './Soft';
// import Languages from './Icons/Languages';
// import Framework from './Icons/Framework';
// import Tools from './Icons/Tools';
// import Soft from './Icons/Soft';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  // useEffect hook to trigger animations when the component mounts
  useEffect(() => {
    gsap.from('.skills__container', {
      x: -100,
      opacity: 0, // Optional: Add opacity animation for a smoother effect
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.skills__container',
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
        markers: true, // Enable markers to debug scroll position
      },
    });
  }, []);
  

  return (
    <div className="skills section" id="skills">
      <h2 className="section__title">My Skills</h2>
      <span className="section__subtitle">
        Here's a collection of my technical expertise and the tools I use to build amazing things.
      </span>
      <div className="skills__container container grid">
        <Technical />
        <Soft />
      </div>
    </div>
  );
}

export default Skills;
