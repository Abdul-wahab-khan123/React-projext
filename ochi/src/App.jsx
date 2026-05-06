import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import EyesAnimation from './components/EyesAnimation'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-gray-200'>
      <Header />
      <Hero />
      <Marquee />
      <About />
      <EyesAnimation />
    </div>
  )
}

export default App
