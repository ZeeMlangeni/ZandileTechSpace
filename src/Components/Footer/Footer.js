import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <div className='footer-section'>

<div className="home-social ">
      <ul className='link-list'>

      <a href="#" className='home-social-icon' target='_blank'><i class="uil uil-github"></i></a>

<a href="https://www.linkedin.com/feed/" className='home-social-icon' target='_blank'><i class="uil uil-linkedin"></i></a>

<a href="https://www.instagram.com/zeeicygirl/" className='home-social-icon' target='_blank'><i class="uil uil-instagram-alt"></i></a>

        <li className='links'><a href="#">Home</a></li>
        <li className='links'><a href="#">About</a></li>
        <li className='links'><a href="#">Skills</a></li>
        <li className='links'><a href="#">CV</a></li>
        <li className='links'><a href="#">Contact</a></li>
      </ul>

 
   
      <p className='copyright'>© 2024 Zandile. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
