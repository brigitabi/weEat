import React from 'react';
import { categories } from '../data/data.js';

const Category = () => {
    console.log(categories)
  return (
    <div className='max-w-[1600px] m-auto px-4 py-12'>
        <h1 className='text-green-500 font-bold text-3xl text-center'>Top Rated Menu Categories</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
            {categories.map((item, index) => (
                <div key={index} className='bg-gray-200 rounded-lg p-4 flex justify-between items-center'>
                    <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                    <img className='w-20' src={item.image} alt={item.name} />
                </div>
            ))}
        </div>
        <div>
            <p className='text-green-900 text-center'>Created by Brigita B for <span className='font-bold'>learning purposes.</span> </p>
            <p className='text-green-900 text-center font-bold'>Images source: Unsplash. </p>
        </div>
    </div>
  )
}

export default Category