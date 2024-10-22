import React, { useContext, useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.svg'
import acc_icon from '../Assets/account-icon.svg'
import cart_icon from '../Assets/cart-icon.svg'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Use an effect to add/remove the 'no-scroll' class on the body
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    // Cleanup when the component is unmounted or the menu is closed
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isMobileMenuOpen])

  return (
    <div className='Navbar'>
      <section className='header'>
        <div className='header-container'>
          <Link onClick={closeMobileMenu} to='/stg-app'>
            <img className='logo' src={logo} alt='' />
          </Link>
          <nav>
            <ul className='nav-container'>
              <li>
                <Link to='/stg-app' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/products' onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              <li>
                <Link to='/about' onClick={closeMobileMenu}>
                  About us
                </Link>
              </li>
              <li>
                <Link to='/contact' onClick={closeMobileMenu}>
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
          <div className='right-sec'>
            <Link onClick={closeMobileMenu} to='/account'>
              <img src={acc_icon} alt='' />
            </Link>
            <div className='nav-cart-img'>
              <Link onClick={closeMobileMenu} to='/cart'>
                <div className='cart-quantity'>
                  <p>{getTotalCartItems()}</p>
                </div>
                <img src={cart_icon} alt='' />
              </Link>
            </div>
            <div className='menu' onClick={toggleMobileMenu}>
              <svg
                id='menu-icon'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 27 27'
                width='27'
                height='27'
              >
                <path
                  fill='#000'
                  d='M2 5h23c.6 0 1-.4 1-1s-.4-1-1-1H2c-.6 0-1 .4-1 1s.4 1 1 1zm0 8h23c.6 0 1-.4 1-1s-.4-1-1-1H2c-.6 0-1 .4-1 1s.4 1 1 1zm0 8h23c.6 0 1-.4 1-1s-.4-1-1-1H2c-.6 0-1 .4-1 1s.4 1 1 1z'
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul className='mob-nav-container'>
            <li>
              <Link to='/stg-app' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/products' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={closeMobileMenu}>
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  )
}

export default Navbar
