import React from 'react'
import './Hero.css'
import arrow_icon from '../../Assets/arrow.svg'
import candel_hero from '../../Assets/candle.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id='hero'>
      <div className='hero-container'>
        <div className='hero-text'>
          <h1>INDULGE IN TRANQUILITY</h1>
          <h2>Discover Luxurious Bath Essentials for a Serene Escape</h2>
          <p>
            Experience pure relaxation with our handcrafted candles, nourishing
            bath milk, rejuvenating bath salts, effervescent bath bombs, and
            invigorating shower steamers. Elevate your self-care routine and
            immerse yourself in the ultimate serenity.
          </p>
          <Link style={{textDecoration : 'none'}} to='/products'>
              <button className='shop-btn'>
                Shop Now <img src={arrow_icon} alt='' />
              </button>
          </Link>
        </div>
        <div className='hero-image-container'>
          <img src={candel_hero} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Hero