import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/faq" element={<Faq />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/product/:id" element={<ProductDetail />}/>
      </Routes>
    </>
  )
}

export default App