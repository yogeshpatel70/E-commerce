import React from 'react'
import ShopHeader from '../shopcomponents/ShopHeader'
import ContactDetails from './ContactDetails'
import FeaturesBar from './FeaturesBar'

const Contact = () => {
  return (
    <div>
      <ShopHeader headerName={"contact"} />
      <ContactDetails />
      <FeaturesBar />
    </div>
  )
}

export default Contact
