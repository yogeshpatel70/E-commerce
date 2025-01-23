import React from 'react'
import ShopHeader from '../shopcomponents/ShopHeader'
import Comparison from './Comparison'
import FeaturesBar from './FeaturesBar'

const Compare = () => {
  return (
    <div>
      <ShopHeader headerName={"compare"} />
      <Comparison />
      <FeaturesBar />
    </div>
  )
}

export default Compare
