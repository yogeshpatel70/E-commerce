// import React from 'react'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'

import { Outlet, useNavigate } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'




const App = () => {
  const navigate = useNavigate()
  const handleClickOnProduct = (id) => {
    navigate("/singleProduct")
  }
  return <>
    <Header />

    <Outlet handleClickOnProduct={handleClickOnProduct} />
    <ScrollToTop />
    <Footer />
  </>
}

export default App
