import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/products'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0
  }
  return cart
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const addToCart = (itemId, quantity) => {
    const finalQuantity = quantity ? parseInt(quantity, 10) : 1
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + finalQuantity,
    }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  // Function to remove all quantity of a product and delete it from the cart
  const removeItem = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev }
      delete updatedCart[itemId]
      return updatedCart
    })
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        )
        totalAmount += itemInfo.price * cartItems[item]
      }
    }
    return totalAmount
  }

  const getTotalCartItems = () => {
    let totalItem = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item]
      }
    }
    return totalItem
  }

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    removeItem,
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
