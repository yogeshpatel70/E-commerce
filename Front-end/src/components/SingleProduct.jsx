import React, { useEffect, useState } from 'react'
import Breadcrumb from './single-product-components/Breadcrumb'
import ProductDetail from './single-product-components/ProductDetails'
import ProductTabs from './single-product-components/ProductTabs'
import OurProducts from './HomeComponents/OurProducts'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductById, selectSingleProduct } from './context/item'



const SingleProduct = () => {


  const product = useSelector(selectSingleProduct);



  const data = "Related Products"


  return (
    <div>
      <Breadcrumb />
      <ProductDetail product={product} />
      <ProductTabs />
      <OurProducts Data={data} />
    </div>
  )
}

export default SingleProduct
