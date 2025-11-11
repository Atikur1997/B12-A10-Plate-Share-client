import React from 'react';
import banner from '../../assets/banner.png'
const Banner = () => {
    return (
        <>
            <div className='bg-[linear-gradient(135deg,#34d399,#a3e635,#f97316)] w-full  relative '>
                <div className='flex flex-col md:flex-row justify-between items-center px-30 pt-5'>
                    <h1 className='merriweather text-white text-5xl '>Share Food , <br /> <br />Spread Hope</h1>
                    <img src={banner} className='w-[500px] h-[500px]' />
                </div>
            </div>


        </>
    );
};

export default Banner;