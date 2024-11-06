import React, { useEffect, useState } from "react";
import { ReactComponent as Sun } from '../../Assets/Sun.svg';
import { ReactComponent as Moon } from '../../Assets/Moon.svg';
import "./DarkMode.css";

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check if dark mode is active on page load
        const currentTheme = document.body.getAttribute('data-theme');
        setIsDarkMode(currentTheme === 'dark');
    }, []);

    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
        setIsDarkMode(true); // Update state when dark mode is set
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
        setIsDarkMode(false); // Update state when light mode is set
    };

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                checked={isDarkMode}
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
