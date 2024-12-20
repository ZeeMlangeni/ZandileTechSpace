import React, {useState}from 'react'
import './Qualification.css'

const Qualification=() => {

    const [togglingState, setTogglingState] = useState(1);

    const toggleTab = (index) => {
      setTogglingState(index);
    };

  return (
  <section className='qualification__section hidden '  id='qualifications'>
    <h2 className='section__title'> Qualifications</h2>
    <span className='section__subtitle'>My Studies and Experience</span>

<div  className='qualification__container container'>
    <div className='qualification__tabs'>
        <div className={togglingState ===1? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex' }  onClick={() => toggleTab(1)}>
        <i className="uil uil-graduation-cap qualification__icon"></i>
        Education
        </div>

        <div className={togglingState ===2? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'}  onClick={() => toggleTab(2)}>
        <i className="uil uil-briefcase-alt qualification__icon"></i>{''}
        Experience
        </div>
    </div>

    <div className='qualification__sections'>
    {togglingState === 1 && (
        <div className='qualification__content qualification__content-active'>
            <div className='qualification__data'>
                <div>
                    <h3 className='qualification__title'>  Belgium Campus ITversity</h3>
                    <span className='qualification__subtitle'>
                    Diploma information technology (NQF Level 6)
                        </span>
<div className='qualification__calendar'>
<i className='uil uil-calendar-alt'></i>2023-Present
</div>
                </div>

                <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
            </div>
        </div>

        <div className='qualification__data'>
            <div></div>

            <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
            </div>

                <div>
                    <h3 className='qualification__title'>Junior Developer Intern</h3>
                    <span className='qualification__subtitle'>
                    Assisted in developing front-end components, debugging code, and collaborating with the development team.
                        </span>
<div className='qualification__calendar'>
<i className='uil uil-calendar-alt'></i>2023-Present
</div>
                </div>
        </div>

        <div className='qualification__data'>
                <div>
                    <h3 className='qualification__title'> Damelin </h3>
                    <span className='qualification__subtitle'>
                    Systems Development (NQF Level 5)
                        </span>
<div className='qualification__calendar'>
<i className='uil uil-calendar-alt'></i>2020-2020
</div>
                </div>

                <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
            </div>
        </div>

        <div className='qualification__data'>
                <div>
                    <h3 className='qualification__title'> Nirvana Secondary School </h3>
                    <span className='qualification__subtitle'>
                    Matric Certificate (NQF Level 4)
                        </span>
<div className='qualification__calendar'>
<i className='uil uil-calendar-alt'></i>2015-2019
</div>
                </div>

                <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
            </div>
        </div>

        <div className='qualification__data'>
            <div></div>

            <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
            </div>

                <div>
                    <h3 className='qualification__title'>Hardware Store Clerk</h3>
                    <span className='qualification__subtitle'>
                    Customer assistance, inventory management, daily operations
                        </span>
<div className='qualification__calendar'>
<i className='uil uil-calendar-alt'></i>2021-Present
</div>
                </div>
        </div>
    </div>)}





    {togglingState === 2 && (
  <div className='qualification__content qualification__content-active'>
    <div className='qualification__data'>
      <div>
        <h3 className='qualification__title'>Demo Company</h3>
        <span className='qualification__subtitle'>
          Senior Software Developer (NQF Level 7)
        </span>
        <div className='qualification__calendar'>
          <i className='uil uil-calendar-alt'></i>2021-2024
        </div>
      </div>

      <div>
        <span className='qualification__rounder'></span>
        <span className='qualification__line'></span>
      </div>
    </div>

    <div className='qualification__data'>
      <div></div>

      <div>
        <span className='qualification__rounder'></span>
        <span className='qualification__line'></span>
      </div>

      <div>
        <h3 className='qualification__title'>Lead Web Developer</h3>
        <span className='qualification__subtitle'>
          Led front-end development teams, implemented responsive UI designs.
        </span>
        <div className='qualification__calendar'>
          <i className='uil uil-calendar-alt'></i>2019-2021
        </div>
      </div>
    </div>

    <div className='qualification__data'>
      <div>
        <h3 className='qualification__title'>Tech Solutions Co.</h3>
        <span className='qualification__subtitle'>
          Software Engineering Intern (NQF Level 6)
        </span>
        <div className='qualification__calendar'>
          <i className='uil uil-calendar-alt'></i>2018-2019
        </div>
      </div>

      <div>
        <span className='qualification__rounder'></span>
        <span className='qualification__line'></span>
      </div>
    </div>

    <div className='qualification__data'>
      <div></div>

      <div>
        <span className='qualification__rounder'></span>
        <span className='qualification__line'></span>
      </div>

      <div>
        <h3 className='qualification__title'>Intern Developer</h3>
        <span className='qualification__subtitle'>
          Assisted in bug fixes, code optimizations, and collaborated in sprint cycles.
        </span>
        <div className='qualification__calendar'>
          <i className='uil uil-calendar-alt'></i>2017-2018
        </div>
      </div>
    </div>
  </div>
)}

</div>
</div>
  </section>
  )
}


export default Qualification