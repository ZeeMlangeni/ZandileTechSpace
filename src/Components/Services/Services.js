import React, { useState } from "react";
import "./Services.css";

function Services() {
  // Function to change the active tab by updating the state
  const [togglingState, setTogglingState] = useState(0);

  const toggleTab = (index) => {
    setTogglingState(index);
  };

  return (
    <section className="services section hidden" id="services">
      <h2 className="section__title autoShow">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {/* Web Development box*/}
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Web Development & <br /> Design
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              togglingState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Web Development & Design
              </h3>
              <p className="services__modal-description">
                Aspiring front-end developer with experience in creating
                responsive websites and user-centric designs.
              </p>
              <ul>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services__modal-info">I develop Websites</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services__modal-info">User-Centric Design</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services__modal-info">Responsive Web Layouts</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*Troubleshooting box*/}
        <div className="services__content hidden">
          <div>
            <i className="uil uil-wrench services__icon"></i>
            <h3 className="services__title">
              Technical Support & Troubleshooting <br /> (Demo Service)
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              togglingState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Technical Support & Troubleshooting (Demo Service)
              </h3>
              <p className="services__modal-description">
                Aspiring technician with a focus on troubleshooting common tech
                issues and improving software performance.
              </p>
              <ul>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services__modal-info">
                    Troubleshooting Common Issues
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services__modal-info">Software Assistance</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services__modal-info">
                    Technical Demo Solutions
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*  Canva  box*/}
        <div className="services__content hidden">
          <div>
            <i className="uil uil-image services__icon"></i>
            <h3 className="services__title">
              Creative Design with <br /> Canva
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              togglingState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Creative Design with <br /> Canva
              </h3>
              <p className="services__modal-description">
                Skilled in creating professional designs with Canva, including
                social media content, presentations, and custom graphics.
              </p>
              <ul>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services__modal-info">Custom Graphics</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services__modal-info">Social Media Content</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services__modal-info">
                    Professional Presentations
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
