import React, { useState } from 'react';
import { data } from '../data/data.js';

const Food = () => {
  const [meals, setMeals] = useState(data)

   const filterType = (category) => { 
        setMeals( 
            data.filter((item) => { 
                return item.category === category;
            })
        );
   } ;

   const filterPrice = (price) => { 
        setMeals(
        data.filter((item) => {
            return item.price === price;
        })
    );
   };

  return (
    <div className='max-w-[1600px] m-auto px-4 py-12'>
      <h1 className='text-green-500 font-bold text-3xl text-center'>Top Rated Menu Items</h1>

      {/* Filter row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter type */}
        <div>
          <p className='font-bold text-gray-700 mb-2'>Filter type</p>
          <div className='flex justify-between flex-wrap'>
            <button onClick={()=> setMeals(data)} className='bg-green-500 text-white border-green-700 hover:bg-green-900'>All </button>
            <button onClick={()=> filterType('burger')} className='bg-green-500 text-white border-green-700 hover:bg-green-900'>Burgers </button>
            <button onClick={()=> filterType('pizza')}className='bg-green-500 text-white border-green-700 hover:bg-green-900'>Pizza </button>
            <button onClick={()=> filterType('salad')} className='bg-green-500 text-white border-green-700 hover:bg-green-900'>Salads </button>
            <button onClick={()=> filterType('chicken')} className='bg-green-500 text-white border-green-700 hover:bg-green-900'>Chickens </button>
          </div>
        </div>

        {/* filter price */}
        <div>
          <p className='font-bold text-gray-700 mb-2'>Filter price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button onClick={()=> filterPrice('$')} className='bg-green-500 text-white border-green-700 hover:bg-green-900'>$</button>
            <button onClick={()=> filterPrice('$$')} className='bg-green-500 text-white border-green-700 hover:bg-green-900'>$$</button>
            <button onClick={()=> filterPrice('$$$')} className='bg-green-500 text-white border-green-700 hover:bg-green-900'>$$$</button>
            <button onClick={()=> filterPrice('$$$$')} className='bg-green-500 text-white border-green-700 hover:bg-green-900'>$$$$</button>
          </div>
        </div>
      </div>

    {/* Show food */}
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 pt-4'>
        {meals.map((item, index)=> (
            <div key={index} className='border shadow-lg rounded-lg hover:scale-110 duration-300'>
                <img src={item.image} alt={item.name} 
                className='w-full h-[200px] object-cover rounded-lg'
                />
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>{item.name}</p>
                    <p>
                        <span className='bg-green-500 text-white p-1 rounded-lg'>{item.price}</span>
                    </p>
                </div>
            </div>
        ))}
    </div>

    </div>
  );
};

export default Food;
