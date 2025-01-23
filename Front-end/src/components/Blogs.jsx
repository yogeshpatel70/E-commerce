import React from 'react'
import ShopHeader from '../shopcomponents/ShopHeader'
import BlogPage from './Blogpage'
import FeaturesBar from './FeaturesBar'

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
