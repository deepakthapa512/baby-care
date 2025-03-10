import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import GirlSection from './Pages/GirlSection'
import Products from './Pages/Products'

export default function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route> 
          <Route path="/blog" element={<Blog/>}></Route> 
          <Route path="/girlsection" element={<GirlSection/>}></Route> 
          <Route path="/products" element={<Products/>}></Route> 
        </Routes>
            <Footer/>
    </BrowserRouter>
  )
}
