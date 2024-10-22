import React, { useContext, useState } from 'react'
import close from '../Assets/close.svg'
import { ShopContext } from '../../Context/ShopContext'
import arrow_icon from '../Assets/arrow2.svg'
import { Link } from 'react-router-dom'

const CartProduct = () => {
  const {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    removeItem,
  } = useContext(ShopContext)

  // State to track delete confirmation for specific items
  const [deleteItemId, setDeleteItemId] = useState(null)

  const isClickedDelete = (id) => {
    setDeleteItemId(id) // Set the id of the item to be deleted
  }

  const cancelDelete = () => {
    setDeleteItemId(null) // Reset the delete confirmation
  }

  // Check if the cart is empty
  const isCartEmpty = Object.values(cartItems).every((value) => value === 0)

  return (
    <section id='cart'>
      <div className='cart-container'>
        <h1>SHOPPING CART</h1>
        <div className='table-head'>
          <div className='head-l'>
            <h2 className='head-t1'>Product</h2>
          </div>
          <div className='head-r'>
            <h2 className='head-t2'>Price</h2>
            <h2 className='head-t3'>Quantity</h2>
            <h2 className='head-t4'>Total</h2>
          </div>
        </div>

        {/* Display "Cart Empty" message if the cart is empty */}
        {isCartEmpty ? (
          <h3 className='cart-empty'>Cart Empty</h3>
        ) : (
          all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <React.Fragment key={e.id}>
                  <div className={`cart-product`}>
                    <div className='pro-info'>
                      <div className='pro-info-left'>
                        <div className='proinfoimg'>
                          <img
                            className='cart-img'
                            src={e.image[0]}
                            alt={e.name}
                          />
                        </div>
                        <p>{e.name}</p>
                      </div>
                    </div>
                    <div className='pro-price'>
                      <div className='pro-price-right'>
                        <div className='p-q-t'>
                          <p className='price'>${e.price.toFixed(2)}</p>
                          <div className='qty'>
                            <p onClick={() => removeFromCart(e.id)}>-</p>
                            <p>{cartItems[e.id]}</p>
                            <p onClick={() => addToCart(e.id)}>+</p>
                          </div>
                          <p className='tot-price'>
                            ${(e.price * cartItems[e.id]).toFixed(2)}
                          </p>
                          <img
                            onClick={() => isClickedDelete(e.id)}
                            className='delete'
                            src={close}
                            alt='Remove item'
                          />
                        </div>
                        <div className='del'>
                          <p
                            onClick={() => isClickedDelete(e.id)}
                            className='delete-m'
                          >
                            <img src={close} alt="" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Show confirmation dialog for the current item */}
                  {deleteItemId === e.id && (
                    <div className='delete-confirm'>
                      <p>Are you sure to delete {e.name}?</p>
                      <div className='con-cont'>
                        <p className='cancel-con' onClick={cancelDelete}>
                          Cancel
                        </p>
                        <button
                          className='del-con'
                          onClick={() => {
                            removeItem(e.id)
                            cancelDelete()
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              )
            }
            return null // If cart item quantity is zero, return nothing
          })
        )}

        {!isCartEmpty && (
          <>
            <div className='table-total'>
              <div className='table-tot-cont'>
                <h2>Subtotal</h2>
                <h2>${getTotalCartAmount().toFixed(2)}</h2>
              </div>
            </div>

            <div className='checkout'>
              <div className='cont-shop'>
                <Link style={{ textDecoration: 'none' }} to='/products'>
                  <h3>Continue Shopping</h3>
                </Link>
                <img src={arrow_icon} alt='Arrow' />
              </div>
              <Link to='/checkout'>
                <button>Checkout</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default CartProduct
