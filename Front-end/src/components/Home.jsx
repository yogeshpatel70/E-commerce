import React from 'react'
import ArrivalBanner from './HomeComponents/ArrivalBanner'
import BrowseRange from './HomeComponents/BrowseRange'
import OurProducts from './HomeComponents/OurProducts'

const Home = ({ handleClickOnProduct }) => {
  return (
    <>
      <ArrivalBanner />
      <BrowseRange />
      <OurProducts handleClickOnProduct={handleClickOnProduct} />

    </>

  )
}

export default Home
