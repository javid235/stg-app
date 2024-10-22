import React from 'react'

const PaymentDetails = () => {
  return (
    <div className='payment-details'>
      <h2>Payment Details</h2>
      <div className='payment-method'>
        <label>
          <input
            className='radio-btn'
            type='radio'
            name='payment'
            defaultChecked
          />{' '}
          Credit Card
        </label>
        <div className='credit-card-info'>
          <input type='text' placeholder='Card Number' />
          <div className='card-expiry'>
            <input type='text' placeholder='Expiration (MM/YY)' />
            <input type='text' placeholder='CSC' />
          </div>
        </div>
        <label>
          <input className='radio-btn' type='radio' name='payment' /> PayPal
        </label>
      </div>
      <button className='place-order-button'>Place Order</button>
    </div>
  )
}

export default PaymentDetails
