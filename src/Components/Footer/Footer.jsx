import React from 'react'
import './Footer.css'
import logo_w from '../Assets/logo-w.svg'
import facebook_icon from '../Assets/facebook.svg'
import insta_icon from '../Assets/instagram.svg'
import twitter_icon from '../Assets/twitter.svg'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>
      <section id='footer'>
        <div className='footer-container'>
          <img className='footer-logo' src={logo_w} alt='' />
          <div className='footer-text-container'>
            <div className='footer-text'>
              <h4>Need help</h4>
              <Link to='/contact'>
                <p>Contact us</p>
              </Link>
              <p>Track order</p>
              <p>My Account</p>
            </div>
          </div>

          <div className='footer-icons'>
            <a href='https://facebook.com'>
              <img src={facebook_icon} alt='' />
            </a>
            <a href='https://instagram.com'>
              <img src={insta_icon} alt='' />
            </a>
            <a href='https://x.com'>
              <img src={twitter_icon} alt='' />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
