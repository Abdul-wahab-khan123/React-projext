import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div className='w-full h-screen pt-38 '>
        <div className='px-8'>
            {["We create","eye-opening","presentations"].map((item, index)=>{
                return (
                <div className='flex items-end gap-3'>
                    {index === 1 &&(
                        <div className="h-20 w-[10vw] bg-amber-800 rounded-xl overflow-hidden">
                            <img src="src/assets/content-image01.jpg" alt="img" className='w-full h-full object-cover' />
                        </div>
                    )}
                    <h1 className='font-[FoundersGrotesk] text-[10vw] leading-[7.5vw] font-bold uppercase'>{item}</h1>
                </div>
             )
            })}
        </div>
        <div className="py-4 mt-23 border-t border-gray-400">
            <div className="flex items-center justify-between px-8 font-[NeueMontreal]">
                {["Presentation and storytelling agency","For innovation teams and global brands"].map((item, index)=>{
                    return(
                        <p className='text-base font-normal text-black'>{item}</p>
                    )
                })}
                <div className="flex items-center gap-1 uppercase text-sm">
                    <div className='border border-black px-3 py-1 rounded-full'>Start The Project</div>
                    <div className='flex items-center justify-center h-8 w-8 border border-black rounded-full'>
                        <MdArrowOutward  className='text-lg'/>  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
