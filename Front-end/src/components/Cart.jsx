import React from 'react'
import ShoppingCart from './ShopingCart'
import FeaturesBar from './FeaturesBar'
import ShopHeader from '../shopcomponents/ShopHeader'

const Cart = () => {
  return (
    <div>
      <ShopHeader />
      <ShoppingCart />
      <FeaturesBar />
    </div>
  )
}

export default Cart
