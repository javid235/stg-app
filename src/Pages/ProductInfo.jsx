import React, { useContext } from 'react'
import {useParams } from 'react-router-dom'
import ProductInfoMain from '../Components/ProductInfoMain/ProductInfoMain';
import './CSS/ProductInfo.css'
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import { ShopContext } from '../Context/ShopContext';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';



const ProductInfo = () => {
    window.scrollTo(0, 0)
    const {all_product}=useContext(ShopContext)
    const {productId}= useParams();
    const itemPro = all_product.find((e)=> e.id === Number(productId))
    
  return (
    <div>
      <div>
        <Breadcrums name={itemPro.name} category={itemPro.category} />
        <ProductInfoMain
          id={itemPro.id}
          name={itemPro.name}
          image={itemPro.image}
          price={itemPro.price}
          description={itemPro.description}
        />
      </div>
      <RelatedProducts category={itemPro.category} />
    </div>
  )
}

export default ProductInfo