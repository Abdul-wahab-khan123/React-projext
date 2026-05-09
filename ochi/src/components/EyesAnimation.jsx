import React, { useEffect, useState } from 'react'

const EyesAnimation = () => {

    const [rotate , setRotate] = useState(0)

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let moveX = e.clientX
            let moveY = e.clientY
            
            let deltaX = moveX - window.innerWidth/2;
            let deltaY = moveY - window.innerHeight/2;

            var angle = Math.atan2(deltaY , deltaX) * (180/Math.PI)
            setRotate(angle-180);
        })
    })

    return (
        <div className='w-full h-screen overflow-hidden'>
            <div className="bg-[url(/src/assets/Top-Viewbbcbv-1-scaled.jpg)] bg-cover bg-center w-full h-full relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/1 flex items-center 
                justify-center gap-10">
                    <div className="relative h-50 w-50 bg-white rounded-full flex items-center justify-center">
                        <div className="relative h-30 w-30 bg-black rounded-full">
                            <div style={{transform: `rotate(${rotate}deg)`}} 
                            className="w-full h-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                                <div className="h-5 w-5 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-50 w-50 bg-white rounded-full flex items-center justify-center">
                        <div className="relative h-30 w-30 bg-black rounded-full">
                            <div style={{transform: `rotate(${rotate}deg)`}} 
                            className="w-full h-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                                <div className="h-5 w-5 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EyesAnimation
