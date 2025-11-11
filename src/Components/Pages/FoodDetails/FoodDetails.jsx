import React from 'react';
import { useLoaderData, useParams } from 'react-router';


const FoodDetails = () => {
    const { id } = useParams()
    const foodData = useLoaderData()
    console.log(foodData)
    const { category, 
        description, 
        donatorName,
         expireDate, 
         foodImage, 
         foodName, 
         foodQuantity, 
         pickupLocation, 
         serves } = foodData
    return (
        <div>
            
        </div>
    );
};

export default FoodDetails;
