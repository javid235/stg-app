import React, { useContext, useState, useEffect } from 'react'
import './FeaturedProduct.css'
import { ShopContext } from '../../../Context/ShopContext'
import ProductItem from '../../ProductItem/ProductItem'

const FeaturedProduct = (props) => {
    const { all_product } = useContext(ShopContext)
    const [randomProducts, setRandomProducts] = useState([])
    const numberOfItems = 4 // Set the desired number of random items to display here

    useEffect(() => {
      // Function to get a specified number of random items from the all_product array
      const getRandomProducts = () => {
        const shuffledProducts = [...all_product].sort(
          () => 0.5 - Math.random()
        ) // Shuffle the products
        return shuffledProducts.slice(0, numberOfItems) // Get the specified number of random items
      }

      setRandomProducts(getRandomProducts()) // Update the state with random products
    }, [all_product, numberOfItems])

  return (
    <section id='featured-pro'>
      <h1 className='title'>{props.title}</h1>
 
      <div className='featured-product-grid'>
        {randomProducts.map((item, i) => (
          <ProductItem
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProduct