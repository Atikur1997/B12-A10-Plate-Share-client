import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { NavLink, useLoaderData } from 'react-router';
import SingleHomeFood from '../Pages/Home/SingleHomeFood';
import Banner from '../Banner/Banner';

const AvailableFoods = () => {
    const data = use(AuthContext);
    const foods = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');

    // 🔍 Filter foods by search term
    const filteredFoods = foods.filter((food) =>
        food.foodName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
          
            <Banner searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <div className="bg-gray-600 max-w-[1200px] mx-auto rounded-3xl py-5">
                <h1 className="text-center text-3xl font-bold text-white mb-10">
                    Available Foods:{" "}
                    <span className="animate-pulse">{filteredFoods.length}</span>
                </h1>

                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10">
                    {filteredFoods.map((food) => (
                        <SingleHomeFood key={food._id} food={food} />
                    ))}
                </div>

                
                {filteredFoods.length === 0 && (
                    <p className="text-center text-gray-300 mt-6">
                        ❌ No foods found matching "<span className="text-yellow-400">{searchTerm}</span>"
                    </p>
                )}
            </div>
        </div>
    );
};

export default AvailableFoods;
