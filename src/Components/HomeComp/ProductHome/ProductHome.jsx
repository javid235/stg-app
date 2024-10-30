import React from 'react'
import './ProductHome.css'
import p1 from '../../Assets/p1.svg'
import p2 from '../../Assets/p2.svg'
import p3 from '../../Assets/p3.svg'
import p4 from '../../Assets/p4.svg'
import p5 from '../../Assets/p5.svg'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const ProductHome = () => {
  return (
    <section id='Products'>
      <h1 className='title'>OUR PRODUCTS</h1>
      <div className='pro-grid-1'>
        <Link to='/products/candles'>
          <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className='Product-container'>
            <img src={p1} alt='' />
            <h2>CANDLES</h2>
          </motion.div>
        </Link>

        <Link to='/products/Bath-Milks'>
          <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className='Product-container'>
            <img src={p2} alt='' />
            <h2>BATH MILKS</h2>
          </motion.div>
        </Link>
        <Link to='/products/Bath-Bombs'>
          <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className='Product-container'>
            <img src={p3} alt='' />
            <h2>BATH BOMBS</h2>
          </motion.div>
        </Link>
        <Link to='/products/Bath-Salts'>
          <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className='Product-container'>
            <img src={p4} alt='' />
            <h2>BATH SALTS</h2>
          </motion.div>
        </Link>
        <Link to='/products/Shower-Streamers'>
          <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className='Product-container'>
            <img src={p5} alt='' />
            <h2>SHOWER STREAMERS</h2>
          </motion.div>
        </Link>
      </div>
    </section>
  )
}

export default ProductHome