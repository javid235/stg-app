import React from 'react'
import BillingDetails from '../Components/CheckoutComp/BillingDetails'
import OrderSummary from '../Components/CheckoutComp/OrderSummary'
import PaymentDetails from '../Components/CheckoutComp/PaymentDetails'
import './CSS/Checkout.css'

const Checkout = () => {
  return (
    <div className='checkout-main'>
      <div className='checkout-container'>
        <div className='billing-section'>
          <BillingDetails />
        </div>
        <div className='order-payment-section'>
          <OrderSummary />
          <PaymentDetails />
        </div>
      </div>
    </div>
  )
}

export default Checkout