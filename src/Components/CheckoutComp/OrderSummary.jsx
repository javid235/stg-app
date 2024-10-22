import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const OrderSummary = () => {
  const {
    all_product,
    cartItems,
    getTotalCartAmount,
  } = useContext(ShopContext)

  return (
    <div className='order-summary'>
      <h2>Your Order</h2>
      {all_product.map((e,) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className='order-item' key={e.id}>
              <img
                src={e.image[0]}
                alt='Salmon Candle'
                className='product-image'
              />
              <p>{e.name}</p>
              <span>
                {cartItems[e.id]}x ${(e.price * cartItems[e.id]).toFixed(2)}
              </span>
            </div>
          )
        }
        return null // If cart item quantity is zero, return nothing
      })}

      <div className='order-total'>
        <h3>Total</h3>
        <h3>${getTotalCartAmount().toFixed(2)}</h3>
      </div>
    </div>
  )
}

export default OrderSummary
      