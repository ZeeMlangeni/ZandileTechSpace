import React from 'react';

function Technical() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Technical Skills</h3>
      <div className="skills__box">
        {/* First Group */}
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        {/* Second Group */}
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">SQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">C#</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

        

    

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__level">Good</span>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default Technical;
