import React from "react";
import "./Socials.css";

function socials() {
  return (
    <div className="home_social">
      {" "}
      {/* fix this link */}
      <a
        href="https://github.com/ZeeMlangeni"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/feed/"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://www.instagram.com/zeeicygirl/"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram-alt"></i>
      </a>
    </div>
  );
}

export default socials;
