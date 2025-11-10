import React, { use } from 'react';
import { useLoaderData } from 'react-router';


const Home = () => {
    const foods = useLoaderData()
    console.log(foods);
    return (
        <div className=''>

        </div>
    );
};

export default Home;