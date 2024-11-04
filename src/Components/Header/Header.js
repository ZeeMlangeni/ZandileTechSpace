import React, { useState } from "react"; // Import useState
import "./Header.css";
import Switch from "./Switch";

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
              <a className="nav__link" href="#">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                About
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                CV
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Contact
              </a>
            </li>
       <li className="nav__item">
       <Switch />
       </li>
          </ul>
          <div className="nav__toggle" onClick={toggleMenu}> 
            <i className={`uil ${isMenuOpen ? 'uil-times' : 'uil-bars'}`} nav___icon></i> {/* Change icon based on state */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
