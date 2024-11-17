import React from "react";

function ScrollDown() {
  return (
    //Component for scrolling down
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex ">
        <svg
          className="home__scroll-mouse"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          width="35px"
          height="35px"
          viewBox="0 0 64 64"
          enable-background="new 0 0 64 64"
        >
          <path
            className="wheel"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-miterlimit="10"
            d="M48,17c0-8.836-7.164-16-16-16S16,8.164,16,17v30
	c0,8.836,7.164,16,16,16s16-7.164,16-16V17z"
          ></path>
          <line
            className="wheel"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-miterlimit="10"
            x1="32"
            y1="10"
            x2="32"
            y2="18"
          ></line>
        </svg>

        <span className="home__scroll-name">ScrollDown</span>
        <i class="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  );
}

export default ScrollDown;
