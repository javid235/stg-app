import React, { useContext, useState } from 'react'
import './ProductInfoMain.css'
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'
import tick from '../Assets/tick.svg'

const ProductInfoMain = (props) => {
  const { addToCart } = useContext(ShopContext)
  const [quantity, setQuantity] = useState(1)
  const [showMessage, setShowMessage] = useState(false)
  const messageDuration = 2500 // Duration in milliseconds (customizable)

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value)
  }

  const [activeImage, setActiveImage] = useState(0)
  const images = props.image

  const handleImageClick = (index) => {
    setActiveImage(index)
  }

  const handleAddToCart = () => {
    addToCart(props.id, quantity)
    setShowMessage(true) // Show the message
    setTimeout(() => setShowMessage(false), messageDuration) // Hide after duration
  }

  return (
    <div className='product-page-cont'>
      {showMessage && (
        <div className='addtocart-msg'>
          <h2>Added {quantity} Items to Cart</h2> <img src={tick} alt='' />
        </div>
      )}
      <div className='product-page'>
        <div className='product-image-gallery'>
          <div className='main-image-container'>
            <img
              src={images[activeImage]}
              alt='Main Product'
              className='main-image'
            />
            <button
              className='prev-arrow'
              onClick={() =>
                setActiveImage(
                  (activeImage - 1 + images.length) % images.length
                )
              }
            >
              &#9664;
            </button>
            <button
              className='next-arrow'
              onClick={() => setActiveImage((activeImage + 1) % images.length)}
            >
              &#9654;
            </button>
          </div>
          <div className='thumbnail-container'>
            {images.map((img, index) => (
              <img
                onLoad={() => handleImageClick(0)}
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${index === activeImage ? 'active' : ''}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>
        <div className='right'>
          <div className='right-container'>
            <div className='pro-name'>
              <h1>{props.name}</h1>
              <h2>{props.description}</h2>
            </div>
            <div className='pro-qty-buy'>
              <h6>${props.price}</h6>
              <p>Quantity</p>
              <select
                id='quantity'
                className='quantity'
                value={quantity}
                onChange={handleQuantityChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <div className='pro-btn'>
                <div className='buy-btn-cont'>
                  <Link onClick={handleAddToCart} to='/cart'>
                    <button className='buy-btn'>Buy Now</button>
                  </Link>
                </div>
                <div className='add-cart-btn-cont'>
                  <button onClick={handleAddToCart} className='add-cart-btn'>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className='pro-about'>
              <h2>About this Product</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfoMain
