// Plagin
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
//!Component
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
//!Page
import SingUp from './page/SingUP'
import Register from './page/Register'
import Basket from './page/Basket'
import TestCoffee from './page/TestCoffee'
import View_Product from './page/View_Product'
import Order from './page/Oreder'

const App = () => {
  const location = useLocation();

  // const isBasketPage = location.pathname === '/Basket';
  const isBasketPage = location.pathname.toLowerCase() === "/basket";
  const isSingUpPage = location.pathname.toLowerCase() === "/singup";
  const isRegisterPage = location.pathname.toLowerCase() === "/register";
  const isTestCoffeePage = location.pathname.toLowerCase() === "/test_coffee";
  const isViewProductPage = location.pathname.toLowerCase() === "/view_product";
  const isOrderPage = location.pathname.toLowerCase() === "/order";

  return (
    <>
      {!isBasketPage && !isSingUpPage && !isRegisterPage && !isViewProductPage && !isOrderPage && <Header />}
      {/* {!isBasketPage && <Navbar />} */}

      {!isBasketPage && !isSingUpPage && !isRegisterPage && !isTestCoffeePage && !isViewProductPage && !isOrderPage && <Section />}
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/Basket' element={<Basket />} />
        <Route path='/singup' element={<SingUp />} />
        <Route path='/test_coffee' element={<TestCoffee />} />
        <Route path='/view_Product' element={<View_Product />} />
        <Route path='/order' element={<Order />} />
      </Routes>

      {!isBasketPage && !isSingUpPage && !isRegisterPage && !isTestCoffeePage && !isViewProductPage && !isOrderPage && <Footer />}
      {/* <Footer/> */}
    </>
  )
}

export default App

