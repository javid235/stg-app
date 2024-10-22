import React from 'react'
import './ProductItem.css'
import { Link } from 'react-router-dom'

const ProductItem = (props) => {
  return (
    <div className='product-cont'>
      <Link className='link' to={`/productinfo/${props.id}`}>
        <div className='pro-image'>
          <img src={props.image[0]} alt='' />
        </div>
        <div className='pro-info-item'>
          <div className='product-title-cont'>
            <h2 className='product-name'>{props.name}</h2>
            <p className='product-subname'>{props.description}</p>
          </div>
          <div className='pri-cont'>
            <h2 className='price-pro'>${props.price}</h2>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductItem
