import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Social Media Icons */}
        <div className="home-social">
          <ul className="social-icons">
            <li>
              <a
                href="https://github.com"
                className="home-social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="uil uil-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                className="home-social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="uil uil-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/zeeicygirl/"
                className="home-social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <i className="uil uil-instagram-alt"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <ul className="link-list">
            <li><a href="example.com" className="links">Home</a></li>
            <li><a href="example.com" className="links">About</a></li>
            <li><a href="example.com" className="links">Skills</a></li>
            <li><a href="example.com" className="links">CV</a></li>
            <li><a href="#example.com" className="links">Contact</a></li>
          </ul>
        </div>

        {/* Copyright */}
        <hr/>
        <p className="copyright">© 2024 Zandile. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
