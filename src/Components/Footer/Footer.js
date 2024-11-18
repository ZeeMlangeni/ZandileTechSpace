import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Zandi</h1>

        <ul className="footer__list">
          <li>
            <a href="#hero" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
             Services
            </a>
          </li>

          <li>
            <a href="#qualifications" className="footer__link">
           Qualifications
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#form" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/ZeeMlangeni"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/feed/"
           className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://www.instagram.com/zeeicygirl/"
        className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-instagram-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
       © 2024 Zandile. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
