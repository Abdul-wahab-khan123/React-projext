import React from 'react'
import { motion } from "motion/react"

const Marquee = () => {
  return (
    <div className='w-full py-20 overflow-hidden relative bg-[#004D43] rounded-t-3xl'>
      <div className="flex items-center pb-8 whitespace-nowrap border-t border-b border-[#4D827B]">
        <motion.h1 
          initial={{ x: "0%" }} 
          animate={{ x: "-100%" }} 
          transition={{ease: "linear", duration: 5, repeat: Infinity}}
          className='text-white text-[27vw] font-bold leading-[20vw]  font-[FoundersGrotesk] pr-5'
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1 
          initial={{ x: "0%" }} 
          animate={{ x: "-100%" }}
          transition={{ease: "linear", duration: 5, repeat: Infinity}}
          className='text-white text-[27vw] font-bold leading-[20vw] font-[FoundersGrotesk] pr-5'
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee
