import React from 'react';  
import "./Section.css";
import AboutImg from '../../Assets/headshot4.jpg';
import CV from '../../Assets/ZandileCV.pdf';
import Info from './Information';

function Section() {
  return (
    <div className='about section' id="about">
      <h3 className='section__title'>About Me</h3>
      <span className='section__subtitle'>The path that lead me here</span>
    

      <div className='about__container container grid'>
        <img src={AboutImg} alt="About Me" className='about__img'/>
        <div className='about__data'>
          <Info />
          <p className='about__description'>
          My coding journey began in 2022 when I realized how technology shapes our lives, even in the smallest daily tasks we often overlook. This ignited my curiosity to dive into coding and explore its potential impact. Since then, I’ve focused on front-end development using HTML, CSS, JavaScript, and React to build user-friendly websites. Solving problems with code and continuous learning keeps me inspired.
           
          </p>

          <a download href={CV} className='cv-btn button button--flex'>
            Download CV
            <svg  width="20px" height="20px" viewBox="0 0 32 32" version="1.1">
              <title>icon 55 document text</title>
              <desc>Created with Sketch.</desc>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="icon-55-document-text" fill="#ffff">
                  <path d="M19.5,3 L9.00276013,3 C7.89666625,3 7,3.89833832 7,5.00732994 L7,27.9926701 C7,29.1012878 7.89092539,30 8.99742191,30 L24.0025781,30 C25.1057238,30 26,29.1017876 26,28.0092049 L26,10.5 L26,10 L20,3 L19.5,3 L19.5,3 L19.5,3 Z M19,4 L8.9955775,4 C8.44573523,4 8,4.45526288 8,4.99545703 L8,28.004543 C8,28.5543187 8.45470893,29 8.9999602,29 L24.0000398,29 C24.5523026,29 25,28.5550537 25,28.0066023 L25,11 L20.9979131,11 C19.8944962,11 19,10.1134452 19,8.99408095 L19,4 L19,4 Z M20,4.5 L20,8.99121523 C20,9.54835167 20.4506511,10 20.9967388,10 L24.6999512,10 L20,4.5 L20,4.5 Z M10,10 L10,11 L17,11 L17,10 L10,10 L10,10 Z M10,7 L10,8 L17,8 L17,7 L10,7 L10,7 Z M10,13 L10,14 L23,14 L23,13 L10,13 L10,13 Z M10,16 L10,17 L23,17 L23,16 L10,16 L10,16 Z M10,19 L10,20 L23,20 L23,19 L10,19 L10,19 Z M10,22 L10,23 L23,23 L23,22 L10,22 L10,22 Z M10,25 L10,26 L23,26 L23,25 L10,25 L10,25 Z" id="document-text"></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Section;
