import React, { useContext, useState, useEffect } from 'react'
// uses same style as featured product 
import { ShopContext } from '../../Context/ShopContext'
import ProductItem from '../ProductItem/ProductItem'

const RelatedProducts = (props) => {
  const { all_product } = useContext(ShopContext)
    const [randomProducts, setRandomProducts] = useState([])
    const numberOfItems = 4 // Set the desired number of random items to display here

    // filters the product based on category in all_product
    let filteredProduct = []
    all_product.map((item, i) => {
      if (item.category === props.category) {
        filteredProduct.push(item)
      }
    })
    console.log(filteredProduct)

    useEffect(() => {
      // Function to get a specified number of random items from the all_product array
      const getRandomProducts = () => {
        const shuffledProducts = [...filteredProduct].sort(
          () => 0.5 - Math.random()
        ) // Shuffle the products
        return shuffledProducts.slice(0, numberOfItems) // Get the specified number of random items
      }

      setRandomProducts(getRandomProducts()) // Update the state with random products
    }, [all_product, numberOfItems])

  return (
    <section id='featured-pro'>
      <h1 className='title'>Related products</h1>
 
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

export default RelatedProducts