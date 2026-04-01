import React from 'react'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'
import Home from './component/Home'



function Approute() {
  return (
  <>
    <Header/>
    <Outlet/>
    <Footer/>
   
    
  </>
  )
}

export default Approute