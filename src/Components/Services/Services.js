import React, { useState } from 'react'
import './Services.css'

function Services() {

    const [togglingState,setTogglingState] =useState (0);


    const toggleTab =(index) =>{
        setTogglingState(index)
    }
  return (
   <section className='services section' id='services'>
<h2 className='section__title'>Services</h2>
<span className='section__subtitle'>What i offer</span>


<div className='services__container container grid'>
    <div className='services__content'>
        <div>
            <i className='uil uil-web-grid services__icon'></i>
            <h3 className='services__title'>Web page <br/> design</h3>
        </div>

        <span className='services__button  ' onClick={() => toggleTab(1)}>
            View More
            <i className='uil uil-arrow-right services__button-icon' ></i>
            </span>

            <div className={togglingState ===1 ?  'services__modal active-modal':'services__modal'}>
        <div className='services__modal-content'>
            <i  onClick={()=> toggleTab(0) } className='uil uil-times services__modal-close '  ></i>

            <h3 className=' services__modal-title'>Product <br/> Designer</h3>
            <p className='services__modal-description'>Service with more the 2 years experience coding</p>
            <ul>
                <li className='services__modal-service'>
                    <i className='uil uil-check-circle services_modal-icon'></i>
                    <p className='services__modal-info'>I develop Websites</p>
                </li>

                <li className='services__modal-service'>
                    <i className='uil uil-check-circle services_modal-icon'></i>
                    <p className='services__modal-info'>User-Centric Design:</p>
                </li>

                <li className='services__modal-service'>
                    <i className='uil uil-check-circle services_modal-icon'></i>
                    <p className='services__modal-info'>Responsive Web Layouts</p>
                </li>
            </ul>
        </div>
    </div>
    </div>



    <div className='services__content'>
        <div>
            <i className='uil uil-web-grid services__icon'></i>
            <h3 className='services__title'>Web page <br/> design</h3>
        </div>

        <span className='services__button  ' onClick={() => toggleTab(1)}>
            View More
            <i className='uil uil-arrow-right services__button-icon' ></i>
            </span>

            <div className={togglingState ===1 ?  'services__modal active-modal':'services__modal'}>
        <div className='services__modal-content'>
            <i   onClick={()=> toggleTab(0) } className='uil uil-times services__modal-close '></i>

            <h3 className=' services__modal-title'>Product <br/> Designer</h3>
            <p className='services__modal-description'>Service with more the 2 years experience coding</p>
            <ul>
                <li className='services__modal-service'>
                    <i className='uil uil-check-circle services_modal-icon'></i>
                    <p className='services__modal-info'>I develop Websites</p>
                </li>

                <li className='services__modal-service'>
                    <i className='uil uil-check-circle services_modal-icon'></i>
                    <p className='services__modal-info'>User-Centric Design:</p>
                </li>

                <li className='services__modal-service'>
                    <i className='uil uil-check-circle services_modal-icon'></i>
                    <p className='services__modal-info'>Responsive Web Layouts</p>
                </li>
            </ul>
        </div>
    </div>
    </div>




    <div className='services__content'>
        <div>
            <i className='uil uil-web-grid services__icon'></i>
            <h3 className='services__title'>Web page <br/> design</h3>
        </div>

        <span className='services__button  ' onClick={() => toggleTab(1)}>
            View More
            <i className='uil uil-arrow-right services__button-icon' ></i>
            </span>

            <div className={togglingState ===1 ?  'services__modal active-modal':'services__modal'}>
        <div className='services__modal-content'>
            <i  onClick={()=> toggleTab(0) } className='uil uil-times services__modal-close '  ></i>

            <h3 className=' services__modal-title'>Product <br/> Designer</h3>
            <p className='services__modal-description'>Service with more the 2 years experience coding</p>
            <ul>
                <li className='services__modal-service'>
                    <i className='uil uil-check-circle services_modal-icon'></i>
                    <p className='services__modal-info'>I develop Websites</p>
                </li>

                <li className='services__modal-service'>
                    <i className='uil uil-check-circle services_modal-icon'></i>
                    <p className='services__modal-info'>User-Centric Design:</p>
                </li>

                <li className='services__modal-service'>
                    <i className='uil uil-check-circle services_modal-icon'></i>
                    <p className='services__modal-info'>Responsive Web Layouts</p>
                </li>
            </ul>
        </div>
    </div>
    </div>





</div>

   </section>
  )
}

export default Services