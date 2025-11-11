import React, { use } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import Banner from '../../Banner/Banner';
import SingleHomeFood from './SingleHomeFood';


const Home = () => {
    const foods = useLoaderData()
    console.log(foods);
    return (
        <div className=''>
            <div>
                <Banner></Banner>
            </div>
            <div className='bg-gray-700 py-10 max-w-[1200px] mx-auto px-10'>
                <h1 className='text-orange-400 text-5xl mb-3 text-center font-semibold'>Featured Foods:<span className='animate-pulse'>{foods.length}</span></h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        foods.map(food => <SingleHomeFood key={food._id} food={food}></SingleHomeFood>)
                    }
                </div>
                <NavLink className="w-full flex justify-center  " to='/avaiable_foods'>
                    <button className=' btn btn-outline btn-success w-[700px] mt-3'> Show All Foods..</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Home;