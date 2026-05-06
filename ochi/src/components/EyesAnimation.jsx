import React, { useEffect } from 'react'

const EyesAnimation = () => {

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            console.log(e);
        })
    })

    return (
        <div className='w-full h-screen overflow-hidden'>
            <div className="bg-[url(/src/assets/Top-Viewbbcbv-1-scaled.jpg)] bg-cover bg-center w-full h-full relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/1 flex items-center justify-center gap-10">
                    <div className="h-40 w-40 bg-white rounded-full flex items-center justify-center">
                        <div className="h-2/3 w-2/3 bg-black rounded-full flex items-center justify-center">
                            <div className="h-5 w-full">
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
