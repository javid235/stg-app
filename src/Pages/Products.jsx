import React, { useState, useEffect, useContext } from 'react'
import ProductItem from '../Components/ProductItem/ProductItem'
import './CSS/Products.css'
import { ShopContext } from '../Context/ShopContext'

const Products = (props) => {
  window.scrollTo(0, 0)

  const {all_product} = useContext(ShopContext)

  const [selectedName, setSelectedName] = useState(props.category || 'All') // Initialize with props or default value

  const handleChange = (event) => {
    setSelectedName(event.target.value) // Update state with the value of the selected option
  }

  useEffect(() => {
    setSelectedName(props.category) // Update state if props.category changes
  }, [props.category])

  return (
    <section id='product'>
      <div className='product-title'>
        <h1>Products</h1>
        <div className='filter-cont'>
          <p>Select product</p>
          <select
            className='drop-down'
            value={selectedName}
            onChange={handleChange}
          >
            <option value='All'>All</option> {/* Added the "All" option */}
            <option value='Candles'>Candles</option>
            <option value='Bath Milks'>Bath Milks</option>
            <option value='Bath Bombs'>Bath Bombs</option>
            <option value='Bath Salts'>Bath Salts</option>
            <option value='Shower Streamers'>Shower Streamers</option>
          </select>
        </div>
      </div>

      <div className='product-grid'>
        {all_product.map((item, i) => {
          // Display all products if "All" is selected or only products that match the selected category
          if (selectedName === 'All' || item.category === selectedName) {
            return (
              <ProductItem
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            )
          }
          return null // Return null if the item does not match the selected category
        })}
      </div>
    </section>
  )
}

export default Products
