import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <div className='w-full py-20 overflow-hidden relative bg-[#CDEA68] rounded-t-3xl font-[NeueMontreal]'>
      <div className="px-8 mb-12">
        <h4 className='text-[4vw] font-medium leading-[4.5vw] font-[NeueMontreal]'>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</h4>
      </div>
      <div className="border-b border-t border-[#99AD52] pt-4 pb-30">
        <div className="px-8 grid grid-cols-2 gap-2 items-start">
            <div>
                <p className='text-base font-normal text-black'>What you can expect:</p>
            </div>
            <div className='flex items-end gap-20'>
                <div className='w-1/2'>
                    <p className='text-base font-normal text-black mb-10'>We don't just make slides. We shape strategy, storytelling, design scalable brand systems, and build presentations that make people say: "I want in!"</p>
                    <p className='text-base font-normal text-black mb-10'>Our clients make the world go round – from deep tech, aerospace and robotics to music festivals and Michelin-starred restaurants.</p>
                    <p className='text-base font-normal text-black'>Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber, Lexus, Salience Labs, Trawa and AllThingsGo.</p>
                </div>
                <div>
                    <p className='text-base font-normal text-black mb-4'>S:</p>
                    <ul>
                        <li><a href="javascript:;" className='text-base font-normal text-black underline'>Instagram</a></li>
                        <li><a href="javascript:;" className='text-base font-normal text-black underline'>Behance</a></li>
                        <li><a href="javascript:;" className='text-base font-normal text-black underline'>Facebook</a></li>
                        <li><a href="javascript:;" className='text-base font-normal text-black underline'>Linkedin</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <div className="px-8 grid grid-cols-2 gap-2 items-start pt-6">
        <div className="">
            <h2 className='text-5xl font-medium text-black'>How we can help:</h2>
            <div className="mt-4 block">
                <a href="javascript:;" className='text-sm bg-black text-white h-14 ps-5 pe-2 flex items-center gap-6 rounded-full 
                uppercase w-fit'>
                    Read More 
                    <span className='bg-white text-black h-10 w-10 flex items-center justify-center rounded-full text-lg'>
                        <MdArrowOutward />
                    </span>
                </a>
            </div>
        </div>
        <div>
            <img src="/src/assets/Homepage-Photo-1326x939.jpg" alt="img"  className='w-full h-full object-cover rounded-xl'/>
        </div>
      </div>
    </div>
  )
}

export default About
