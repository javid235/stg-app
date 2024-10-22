import React from 'react'
import Hero from '../Components/HomeComp/Hero/Hero'
import Productmsg from '../Components/HomeComp/productmsg/Productmsg'
import ProductHome from '../Components/HomeComp/ProductHome/ProductHome'
import About from '../Components/HomeComp/About/About'
import FeaturedProduct from '../Components/HomeComp/FeaturedProduct/FeaturedProduct'

const Home = () => {

  return (
    <div>
      <Hero />
      <Productmsg />
      <ProductHome />
      <FeaturedProduct title='featured products' />
      <About />
    </div>
  )
}

export default Home
