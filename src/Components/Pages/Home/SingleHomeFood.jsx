import React from 'react';
import Card from '../../Card/Card';

const SingleHomeFood = ({ food }) => {
    console.log(food);
    const { _id, donatorName, expireDate, foodImage, foodName, foodQuantity, pickupLocation, category } = food
    return (
        <div>
            <Card donatorName={donatorName} expireDate={expireDate} foodImage={foodImage} foodName={foodName} foodQuantity={foodQuantity} pickupLocation={pickupLocation} category={category} _id={_id}></Card>
        </div>
    );
};

export default SingleHomeFood;