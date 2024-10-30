import React from 'react'
import './About.css'
import about1 from '../../Assets/about1.svg'
import about2 from '../../Assets/about2.svg'
import { motion } from 'framer-motion'

function About() {
  return (
    <section id='about'>
      <div className='about-container'>
        <div className='about-text'>
          <h1>ABOUT US</h1>
          <p>
            At She's the Goat, we're more than just a company – we're a
            community of empowered women who embrace their greatness. Our
            mission is to provide high-quality products that elevate your
            self-care routine and celebrate your inner strength. With a
            commitment to excellence and a passion for empowerment, we invite
            you to discover the story behind She's the Goat.
          </p>
        </div>
        <div className='about-img'>
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={about1}
            alt=''
          />
        </div>
      </div>
      <div className='about-container'>
        <div className='about-img-2'>
          <motion.img 
          whileHover={{ scale: 1.2 }}
          src={about2} alt='' />
        </div>
        <div className='about-text-2'>
          <h1>OUR STORY</h1>
          <p>
            Founded by women, for women, She's the Goat was born out of a desire
            to create a space where women can feel confident, empowered, and
            unapologetically themselves. Our journey began with a simple idea:
            to redefine beauty standards and encourage women to embrace their
            unique qualities. Inspired by the resilience and determination of
            the G.O.A.T. (Greatest of All Time), our brand celebrates the
            strength, beauty, and greatness within every woman.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
