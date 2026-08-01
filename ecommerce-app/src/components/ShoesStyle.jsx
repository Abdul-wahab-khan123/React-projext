import React from 'react'
import { Link } from 'react-router-dom'

const ShoesStyle = () => {
  return (
    <div className="grid grid-cols-3 gap-8 px-10 py-10">
      <div className="w-full h-125 relative overflow-hidden rounded-3xl">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url(../img1.jpeg)] bg-cover bg-center"></div>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Content */}
        <div className="relative z-10 flex h-full items-end px-5 py-5">
          <div>
            <h4 className="text-white text-[23px] font-bold leading-8 mb-8">
              Sneakers That Move With You, Comfortable, Durable, And Always In Style.
            </h4>
            <Link to="/" className="inline-block text-sm font-medium px-6 py-4 bg-[#342617] text-amber-50 rounded-2xl">
              Find Your Fit
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoesStyle
