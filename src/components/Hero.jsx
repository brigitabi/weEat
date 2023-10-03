import React from 'react';

const Hero = () => {
  return (
  <div className='max-w-[1600px] mx-auto p-4'>
    <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-300 max-h-[500px] bg-black/30 flex flex-col justify-center'>
            <h1 className='px-6 pr-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-green-500'>Most Delicious </span> </h1>
            <h1 className='px-8 my-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-green-500'>Meals </span> Delivered </h1>   
        </div>
        <img className='w-full max-h-[500px] object-cover' src="https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt='Meal' />
    </div>
  </div>
  )
};

export default Hero;
