import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/Faq'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/faq" element={<Faq />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
        <Route path="/terms" element={<TermsConditions />}/>
        <Route path="/product/:id" element={<ProductDetail />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </>
  )
}

export default App