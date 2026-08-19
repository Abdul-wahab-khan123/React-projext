import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Men from './pages/Men'
import ProductDetail from './pages/ProductDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/men" element={<Men />}/>
        <Route path="/product/:id" element={<ProductDetail />}/>
      </Routes>
    </>
  )
}

export default App

// Home Page
// │
// ├── Hero Section
// ├── Categories
// ├── Featured Products
// ├── New Arrivals
// ├── Best Sellers
// ├── Sale Banner
// ├── Why Choose Us
// ├── Testimonials
// ├── Newsletter