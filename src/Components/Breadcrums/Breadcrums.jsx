import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/arrow2.svg'
import { Link } from 'react-router-dom'

const Breadcrums = (props) => {
  let itemCat = props.category.replace(/\s+/g, '-')
  return (
    <div id='pro-nav'>
      <div className='pro-max-cont'>
        <Link className='link' to='/products'>
          <p>All</p>
        </Link>
        <img src={arrow_icon} alt='' />
        <Link className='link' to={`/products/${itemCat}`}>
          <p>{props.category}</p>
        </Link>
        <img src={arrow_icon} alt='' />
        <p>{props.name}</p>
      </div>
    </div>
  )
}

export default Breadcrums
