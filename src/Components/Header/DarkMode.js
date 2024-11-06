import React from "react";
import { ReactComponent as Sun } from './Assets/Sun.svg'
import { ReactComponent as Moon } from "./Assets/Moon.svg"
import "./DarkMode.css";

const DarkMode = () => {

    const setDarkMode=() =>{
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }

    const setLightMode=() =>{
        document.querySelector("body").setAttribute('data-theme', 'light')
    }
    setDarkMode();
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;