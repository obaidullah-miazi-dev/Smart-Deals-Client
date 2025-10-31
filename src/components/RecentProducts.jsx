import React from 'react';
import { Link } from 'react-router';

const RecentProducts = ({product}) => {
    const {_id,title,price_min,price_max,image} = product
    return (
        <div className='shadow-md rounded-md p-4 space-y-4'>
            <img className='w-full h-[270px] bg-base-200 rounded-md' src={image} alt={title} />
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p className='font-semibold text-gray-600 text-lg'>$ {price_min} - {price_max}</p>
            <Link to={`/productDetails/${_id}`}>
            <button className='btn bg-gradient text-white w-full hover-eff rounded-md'>View Details</button>
            </Link>
        </div>
    );
};

export default RecentProducts;