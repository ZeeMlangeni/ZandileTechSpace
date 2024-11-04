import React from 'react'
import "./Socials.css"

function socials() {
  return (
    <div className="home_social">
        <a href="example.com" className='home_social-icon' target='_blank' rel='noreferrer'><i class="uil uil-github"></i></a>

        <a href="https://www.linkedin.com/feed/" className='home_social-icon' target='_blank' rel='noreferrer'>
  <i className="uil uil-linkedin"></i>
</a>


        <a href="https://www.instagram.com/zeeicygirl/" className='home_social-icon' target='_blank' rel='noreferrer'><i class="uil uil-instagram-alt"></i></a>
    </div>
  )
}

export default socials