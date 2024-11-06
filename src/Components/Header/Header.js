import React, { useState } from "react"; // Import useState
import "./Header.css";
import Switch from "./Switch";
import DarkMode from './Components/Header/DarkMode';

function Header() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);





  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav logo">
          <h2>
            <span className="letter">Z</span>andi.
          </h2>
        </a>
        <div className="nav-menu">
          <ul className={`nav-list grid ${isMenuOpen ? "active" : ""}`}> 
            <li className="nav__item">
              <a className="nav__link" href="example.com">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="example.com">
                About
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="example.com">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="example.com">
                CV
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="example.com">
                Contact
              </a>
            </li>
       <li className="nav__item">
       <Switch />
       <DarkMode/>
       </li>
          </ul>
          <div className="nav__toggle" onClick={toggleMenu}> 
            <i className={`uil ${isMenuOpen ? 'uil-times' : 'uil-bars'}`} nav___icon></i> 
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
