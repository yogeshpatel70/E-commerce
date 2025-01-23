import React from 'react'
import ShopHeader from '../shopcomponents/ShopHeader'

import FeaturesBar from './FeaturesBar'
import BlogPage from './BlogPage'

const Blogs = () => {
  return (
    <div>
      <ShopHeader headerName={"Blogs"} />
      <BlogPage />
      <FeaturesBar />

    </div>
  )
}

export default Blogs
