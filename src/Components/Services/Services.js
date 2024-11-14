import React from 'react'
import './Services.css'

function Services() {
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

        <span className='services__button'>View More<i className='uil uil-arrow-right services__button-icon'></i></span>
        <div className='services__modal-content'>
            <i className='uil uil-times services__modal-close'></i>

            <h3 className=' services__modal-title'>experienced with coding and providing the best service </h3>
            <p className='services__modal-description'>As an aspiring front-end developer, I specialize in creating responsive websites using HTML, CSS, React, and modern design tools like Canva. I focus on crafting smooth user experiences and visually appealing web elements</p>
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



    <div className='services__content'>
        <div>
            <i className='uil uil-print services__icon'></i>
            <h3 className='services__title'>Technical Support & Troubleshooting (Demo Service)</h3>
        </div>

        <span className='services__button'>View More<i className='uil uil-arrow-right services__button-icon'></i></span>
        <div className='services__modal-content'>
            <i className='uil uil-times services__modal-close'></i>

            <h3 className=' services__modal-title'></h3>
            <p className='services__modal-description'>As an aspiring front-end developer, I’m also working on developing skills in technical support and troubleshooting. I aim to assist with common tech issues, including basic device troubleshooting and software support, while continuing to expand my technical knowledge.</p>
            <ul>
                <li className='services__modal-service'>
                    <i className='uil uil-check-circle services_modal-icon'></i>
                    <p className='services__modal-info'>Troubleshooting Common Issues</p>
                </li>

                <li className='services__modal-service'>
                    <i className='uil uil-check-circle services_modal-icon'></i>
                    <p className='services__modal-info'>Software Assistance:</p>
                </li>

                <li className='services__modal-service'>
                    <i className='uil uil-check-circle services_modal-icon'></i>
                    <p className='services__modal-info'>Technical Demo Solutions</p>
                </li>
            </ul>
        </div>
    </div>



    <div className='services__content'>
        <div>
            <i className='uil uil-browser services__icon'></i>
            <h3 className='services__title'>Creative Design <br/> with Canva</h3>
        </div>

        <span className='services__button'>View More<i className='uil uil-arrow-right services__button-icon'></i></span>
        <div className='services__modal-content'>
            <i className='uil uil-times services__modal-close'></i>

            <h3 className=' services__modal-title'></h3>
            <p className='services__modal-description'>I am Skilled at an intermediate level in using Canva to create professional and eye-catching designs. From social media content to presentations, I bring creativity and attention to detail in every project to ensure the design communicates effectively and aligns with brand</p>
            <ul>
                <li className='services__modal-service'>
                    <i className='uil uil-check-circle services_modal-icon'></i>
                    <p className='services__modal-info'>Social Media Content</p>
                </li>

                <li className='services__modal-service'>
                    <i className='uil uil-check-circle services_modal-icon'></i>
                    <p className='services__modal-info'>Professional Presentations</p>
                </li>

                <li className='services__modal-service'>
                    <i className='uil uil-check-circle services_modal-icon'></i>
                    <p className='services__modal-info'>Custom Graphics</p>
                </li>
            </ul>
        </div>
    </div>




</div>

   </section>
  )
}

export default Services