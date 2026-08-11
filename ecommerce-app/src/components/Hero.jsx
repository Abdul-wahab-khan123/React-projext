import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div className="h-dvh w-full relative overflow-hidden bg-[url(../banner-img.png)] bg-cover bg-repeat bg-center flex items-center px-10 pt-10">
        <div className="w-[50%]">
          <h1 className='Recoleta text-[120px] leading-33 font-extrabold text-amber-50 mb-10'>Sneakers That Defy Your Every day Look</h1>

          <Link to="/" className="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden rounded-2xl bg-amber-50 text-lg font-semibold text-(--primary-color)">
           {/* Text Animation */}
            <span className="relative z-10 h-6 overflow-hidden">
              <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-1/2">
                <span className="flex h-6 items-center justify-center text-(--primary-color)">
                  Shop Now
                </span>
                <span className="flex h-6 items-center justify-center text-(--primary-color)">
                  Shop Now
                </span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Hero
