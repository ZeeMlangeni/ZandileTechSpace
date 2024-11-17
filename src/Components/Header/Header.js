import React, { useState } from "react"; // Imported useState
import "./Header.css";
/* import Switch from "./Switch"; */
import DarkMode from "./DarkMode.js";

function Header() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  //This function is the one that enables smooth scrolling to a specific element on the page.
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close the menu after scrolling
  };



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header " >
      <nav className="nav container">
        <a href="index.html" className="nav logo">
          <h2>
            <span className="letter">Z</span>andi.
          </h2>
        </a>
        <div className="nav-menu">
          <ul className={`nav-list grid ${isMenuOpen ? "active" : ""}`}> 
            <li className="nav__item">
              <a className="nav__link" href="#hero" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#about" onClick={() => {
      handleSmoothScroll('projects');
      setIsMenuOpen(false);
    }}>
                About
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#skills" onClick={() => setIsMenuOpen(false)}>
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link" href="#projects"  onClick={() => {
      handleSmoothScroll('projects');
      setIsMenuOpen(false);
    }} >
               Projects
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#about" onClick={() => setIsMenuOpen(false)}>
                CV
              </a>
            </li>
          
       <li className="nav__item"  onClick={() => setIsMenuOpen(false)}>
      

       <DarkMode/>
     
    {/*    <Switch /> */}
    
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
