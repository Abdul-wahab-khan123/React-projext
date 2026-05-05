import React from 'react'
import BackText from './components/BackText'
import Foreground from './components/Foreground'

const App = () => {
  return (
    <div className='relative w-full h-screen bg-gray-900 p-4'>
      <BackText />
      <Foreground />
    </div>
  )
}

export default App
