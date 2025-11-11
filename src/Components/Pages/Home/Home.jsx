import React, { use } from 'react';
import { useLoaderData } from 'react-router';
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
            <div>
                {
                    foods.map(food => <SingleHomeFood key={food._id} food={food}></SingleHomeFood>)
                }
            </div>
        </div>
    );
};

export default Home;