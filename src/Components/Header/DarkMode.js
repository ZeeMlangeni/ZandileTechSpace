import React, { useEffect, useState } from "react";
import "./DarkMode.css";
import { ReactComponent as Sun } from "../../Assets/Sun.svg";
import { ReactComponent as Moon } from "../../Assets/Moon.svg";

//Dark mode and Light mode component
const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    const currentTheme =
      savedTheme ||
      (document.body.getAttribute("data-theme") === "dark" ? "dark" : "light");
    setIsDarkMode(currentTheme === "dark");

    document.body.setAttribute("data-theme", currentTheme);
  }, []);

  const setDarkMode = () => {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    setIsDarkMode(true);
  };

  const setLightMode = () => {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    setIsDarkMode(false);
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
