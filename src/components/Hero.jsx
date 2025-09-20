import React from 'react'

function Hero() {
    return (
        <div className='max-w-[1640px] mx-autop-4'>
            <div className='max-h-[500px] relative'>
                {/* OverLay */}
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>Delivered</span> Foods</h1>
                </div>
                <img 
                className = 'w-full max-h-[500px] object-cover'
                // src = "https://images.pexels.com/photos/959926/pexels-photo-959926.jpeg" 
                // src = "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
                src = "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg"
                alt = "Food photo"/>
            </div>
        </div>
    )
} 

export default Hero