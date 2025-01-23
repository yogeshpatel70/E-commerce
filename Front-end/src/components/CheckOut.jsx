import React from 'react'
import FeaturesBar from './FeaturesBar'
import BillingDetails from './BillingDetails'
import ShopHeader from '../shopcomponents/ShopHeader'

const CheckOut = () => {
  return (
    <div>
      <ShopHeader headerName={"checkout"} />
      <BillingDetails />
      <FeaturesBar />

    </div>
  )
}

export default CheckOut
