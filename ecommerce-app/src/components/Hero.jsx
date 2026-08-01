import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div className="h-dvh w-full relative overflow-hidden bg-[url(../banner-img.png)] bg-cover bg-repeat bg-center flex items-center px-10 pt-10">
        <div className="w-[50%]">
            <h1 className='Recoleta text-[80px] leading-23 font-extrabold text-amber-50 mb-10'>Sneakers That Defy Your Every day Look</h1>
            <Link to="/" className='inline-block text-sm font-medium px-8 p-3 bg-amber-50 rounded-xl'>Shop Now</Link>
        </div>
      </div>
    </>
  )
}

export default Hero
