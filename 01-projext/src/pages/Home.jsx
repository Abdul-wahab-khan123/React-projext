import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";

const Home = () => {
  return (
    <div className="relative pt-28">
        <div className='container mx-auto px-8 grid grid-cols-2 gap-4 items-center'>
            <div>
                <h1 className='text-7xl text-black leading-20 mb-2'>YOUR FEET <span className='OutfitBold text-[#D01C28]'>DESERVE</span> THE BEST</h1>
                <p className='mb-5 text-black'>your feet deserve the best and we’re here to help you with our shoes.</p>
                <div className='flex items-center gap-3.5 mb-6'>
                    <a href="javascript:;" className='py-2 px-6 text-base font-medium text-white border-red-700 border-2 bg-[#D01C28] rounded-sm'>Shop Now</a>
                    <a href="javascript:;" className='py-2 px-6 text-base font-medium text-black border-gray-400 border-2 bg-transparent rounded-sm'>Category</a>
                </div>
                <p className='mb-3 text-black'>Also Available On:</p>
                <div className='flex items-center justify-start gap-1'>
                    <a href="javascript:;" className='h-10 w-10 text-xl rounded-full bg-black text-white flex items-center justify-center transition-all hover:bg-[#D01C28]'><FaFacebookF /></a>
                    <a href="javascript:;" className='h-10 w-10 text-xl rounded-full bg-black text-white flex items-center justify-center transition-all hover:bg-[#D01C28]'><FaInstagram /></a>
                    <a href="javascript:;" className='h-10 w-10 text-xl rounded-full bg-black text-white flex items-center justify-center transition-all hover:bg-[#D01C28]'><FaAmazon /></a>
                </div>
            </div>
            <div>
                <img src="public/images/shoe_image.png" alt="img" className='w-[85%] h-full m-auto' />
            </div>
        </div>
    </div>
  )
}

export default Home
