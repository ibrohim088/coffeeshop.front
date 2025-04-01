// Plagin
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
//!Component
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
//!Page
import SingUp from './page/SingUP'
import Orders from './page/Orders'
import Basket from './page/Basket'
import Register from './page/Register'
import Menu from './page/Menu'

const App = () => {
  const location = useLocation();

  // const isBasketPage = location.pathname === '/Basket';
  const isBasketPage = location.pathname.toLowerCase() === "/basket";


  return (
    <>
      <Header />
      {/* {!isBasketPage && <Navbar />} */}
      {!isBasketPage && <Section />}
      
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/register' element={<Register/>} />
        <Route path='/Basket' element={<Basket />} />
        <Route path='/singup' element={<SingUp />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/menu' element={<Menu/>}/>
      </Routes>

      {!isBasketPage && <Footer />}
      {/* <Footer/> */}
    </>
  )
}

export default App
