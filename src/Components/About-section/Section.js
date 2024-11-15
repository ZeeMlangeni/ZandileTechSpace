import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Section.css';
import AboutImg from '../../Assets/headshot4.jpg';

gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  useEffect(() => {
    // Animation for the image (slides in from the left)
    gsap.from(".about__img", {
      scrollTrigger: {
        trigger: ".about__container", // Element that triggers the animation
        start: "top 80%", // When the top of the element reaches 80% of the viewport height
        end: "top 30%", // End when it's 30% from the top
        scrub: true, // Link scroll position with animation
      },
      x: -1000, // Start at -1000px (off-screen left)
      opacity: 0, // Start at 0 opacity (invisible)
      duration: 1,
    });

    // Animation for the text (slides in from the right)
    gsap.from(".about__data", {
      scrollTrigger: {
        trigger: ".about__container",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
      x: 1000, // Start at 1000px (off-screen right)
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="about section" id="about">
      <h3 className="section__title">About Me</h3>
      <span className="section__subtitle">The path that led me here</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="About Me" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            My coding journey began in 2022 when I realized how technology shapes
            our lives, even in the smallest daily tasks we often overlook. This ignited
            my curiosity to dive into coding and explore its potential impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
