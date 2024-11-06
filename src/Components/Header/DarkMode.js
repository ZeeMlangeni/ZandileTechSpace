import React, { useState, useEffect } from "react";
import { ReactComponent as Sun } from '../../Assets/Sun.svg';
import { ReactComponent as Moon } from '../../Assets/Moon.svg';

import "./DarkMode.css";

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check the current theme on load and set state accordingly
        const currentTheme = document.body.getAttribute('data-theme');
        setIsDarkMode(currentTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        document.querySelector("body").setAttribute('data-theme', newTheme);
        setIsDarkMode(!isDarkMode);
    }

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
                <Sun className={`sun_icon ${isDarkMode ? 'hidden' : ''}`} />
                <Moon className={`moon_icon ${!isDarkMode ? 'hidden' : ''}`} />
            </label>
        </div>
    );
};

export default DarkMode;
