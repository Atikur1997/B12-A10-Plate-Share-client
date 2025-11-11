import React from 'react';
import banner from '../../assets/banner.png';

const Banner = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="bg-[linear-gradient(135deg,#34d399,#a3e635,#f97316)] w-full relative rounded-3xl">
            <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-20 py-10">


                <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
                    <h1 className="merriweather text-white text-5xl font-bold leading-tight">
                        Share Food, <br /> Spread Hope 🍽️
                    </h1>



                </div>
                <div className="mt-8 relative w-full max-w-md">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for food..."
                        className="w-full px-5 py-3 rounded-full text-gray-700 focus:outline-none shadow-lg"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-500 text-white px-5 py-2 rounded-full hover:bg-emerald-600 transition-all duration-200">
                        🔍
                    </button>
                </div>


                <div className="mt-10 md:mt-0 flex justify-center md:justify-end w-full md:w-1/2">
                    <img
                        src={banner}
                        alt="Banner"
                        className="w-[350px] md:w-[450px] h-auto drop-shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
