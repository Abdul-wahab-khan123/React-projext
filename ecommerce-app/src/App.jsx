import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Products from './pages/Products'
import Card from './pages/Card'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/card" element={<Card />}/>
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