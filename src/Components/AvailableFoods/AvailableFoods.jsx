import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { NavLink } from 'react-router';
import SingleHomeFood from '../Pages/Home/SingleHomeFood';
import { useLoaderData } from 'react-router';

const AvailableFoods = () => {
    const data = use(AuthContext)
    const foods = useLoaderData()
    console.log(foods);
    return (
        <div className='bg-gray-600 max-w-[1200px] mx-auto rounded-3xl py-5'>
            <h1 className='text-center text-3xl font-bold text-white mb-10'>Available Foods: <span className='animate-pulse'>{foods.length}</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10'>
                {
                    foods.map(food => <SingleHomeFood key={food._id} food={food}></SingleHomeFood>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;