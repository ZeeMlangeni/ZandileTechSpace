import React from 'react'
import './Qualification.css'

function Qualification() {
  return (
  <section className='qualification__section'>
    <h2 className='section__title'> Qualifications</h2>
    <span className='section__subtitle'>My Studies</span>

<div  className='qualification__container container'>
    <div className='qualification__tabs'>
        <div className='qualification__button qualification__active button--flex'>
        <i className="uil uil-graduation-cap qualification__icon"></i>
        Education
        </div>

        <div className='qualification__button button--flex'>
        <i className="uil uil-briefcase-alt qualification__icon"></i>{''}
        Experience
        </div>
    </div>

    <div className='qualification__sections'>
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
<i className='uil uil-calendar-alt'></i>2023-Present
</div>
                </div>
        </div>
    </div>
</div>
</div>
  </section>
  )
}

export default Qualification