
import './index.css'
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './page/homepage'
import CoursePage from './page/CoursePage'
import Aboutpage from './page/Aboutpage'
import ContactPage from './page/ContactPage'
import CourseDetail from './page/CourseDetail'
import Checkout from './page/Checkout'
import Buy from './page/Buy'
import Success from './page/Success'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  
  // AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Shop */}
        <Route path="/course" element={<CoursePage />} />

        {/* Product Detail */}
        <Route path="/product/:id" element={<CourseDetail />} />

        {/* About */}
        <Route path="/about" element={<Aboutpage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Buy */}
        <Route path="/buy" element={<Buy />} />

        {/* Checkout */}
        <Route path="/checkout/:id" element={<Checkout />} />

        {/* Success */}
        <Route path="/success" element={<Success />} />
        <Route path="/success/:orderId" element={<Success />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
