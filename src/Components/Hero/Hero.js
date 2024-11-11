import React from 'react'
import "./Hero.css"
import Socials from './Socials';
import headshot from "../../Assets/headshot4.jpg";
import Data from './Data'

function Hero() {
  return (
<section className='hero' id='hero'>


  <div className='home___container container grid'>

    <div className='home___content grid'>
<Socials/>
<img className='headshot-img'src={headshot} alt='image-of-me'></img>
<Data/>

</div>
    </div>

</section>



  )
}

export default Hero