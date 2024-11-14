import React from "react";

function Information() {
  return (
    <div className="about__info grid">
      {/* Skills and Goals Section */}
      <div className="about__box">
        <i className="uil uil-brackets-curly about__icon"></i>
        <h3 className="about__title">Skills and Goals</h3>
        <span className="about__subtitle">
          Intermediate skills in Front-end Languages.
        </span>
      </div>

      {/* Education Section */}
      <div className="about__box">
        <i className="uil uil-graduation-cap about__icon "></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">
          Diploma in Information Technology.
        </span>
      </div>

      {/* Future Goals Section */}
      <div className="about__box">
        <i className="uil uil-server about__icon "></i>
        <h3 className="about__title">Future Goals</h3>
        <span className="about__subtitle">Exploring Node.js .</span>
      </div>
    </div>
  );
}

export default Information;
