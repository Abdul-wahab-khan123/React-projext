import React from 'react'

function BackText() {
  return (
    <div className='fixed w-full h-screen z-2 top-0 left-0'>
      <h6 className='text-lg leading-none font-bold text-gray-700 text-center p-8 absolute top-[5%] w-full'>Document</h6>
      <h1 className='text-[10rem] leading-none tracking-tighter font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-700'>Docs.</h1>
    </div>
  )
}

export default BackText
