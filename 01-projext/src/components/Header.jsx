import React from 'react'

const Header = () => {
  return (
    <header className='py-4 absolute z-10 w-full'>
        <div className="container mx-auto px-8 flex items-center justify-between">
            <div>
                <img src="public/images/brand_logo.svg" alt="img" className='w-20 h-12 object-contain'/>
            </div>
            <div>
                <ul className='flex items-center justify-center gap-4'>
                    <li><a href="javascript:;" className='text-sm font-medium text-black relative transition-all before:content-[""] before:absolute before:-bottom-1 before:left-0 before:w-0 before:transition-all before:h-0.5 before:bg-[#D01C28]  hover:text-[#D01C28] hover:before:w-full'>HOME</a></li>
                    <li><a href="javascript:;" className='text-sm font-medium text-black relative transition-all before:content-[""] before:absolute before:-bottom-1 before:left-0 before:w-0 before:transition-all before:h-0.5 before:bg-[#D01C28]  hover:text-[#D01C28] hover:before:w-full'>MENU</a></li>
                    <li><a href="javascript:;" className='text-sm font-medium text-black relative transition-all before:content-[""] before:absolute before:-bottom-1 before:left-0 before:w-0 before:transition-all before:h-0.5 before:bg-[#D01C28]  hover:text-[#D01C28] hover:before:w-full'>LOCATION</a></li>
                    <li><a href="javascript:;" className='text-sm font-medium text-black relative transition-all before:content-[""] before:absolute before:-bottom-1 before:left-0 before:w-0 before:transition-all before:h-0.5 before:bg-[#D01C28]  hover:text-[#D01C28] hover:before:w-full'>ABOUT</a></li>
                    <li><a href="javascript:;" className='text-sm font-medium text-black relative transition-all before:content-[""] before:absolute before:-bottom-1 before:left-0 before:w-0 before:transition-all before:h-0.5 before:bg-[#D01C28]  hover:text-[#D01C28] hover:before:w-full'>CONTACT</a></li>
                </ul>
            </div>
            <div>
                <a href="javascript:;" className='py-2 px-6 text-base font-medium text-white bg-[#D01C28] rounded-sm'>Login</a>
            </div>
        </div>
    </header>
  )
}

export default Header
