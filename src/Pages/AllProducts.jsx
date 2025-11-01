import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Container from '../components/Container';

const AllProducts = () => {
    const products = useLoaderData()
    console.log(products);
    return (
        <div className='mt-18'>
            <h2 className='font-bold text-center md:text-5xl text-3xl mt-8'>All
                <span className='text-primary'> Products </span>
            </h2>

            <Container>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mt-12'>
                {
                    products.map(product =>  
                        <div key={product._id} className='shadow-md rounded-md p-4 space-y-4'>
                            <img className='w-full h-[270px] bg-base-200 rounded-md'
                                src={product.image} alt={product.title} />
                            <h2 className='text-2xl font-bold'>{product.title}</h2>
                            <p className='text-gray-500'>{product.description}</p>
                            <p className='font-semibold text-gray-600 text-lg'>
                                $ {product.price_min} - {product.price_max}</p>
                            <Link to={`/productDetails/${product._id}`}>
                                <button 
                                className='btn bg-gradient text-white w-full hover-eff rounded-md'>
                                    View Details
                                </button>
                            </Link>
                        </div>
                    )
                }
            </div>
            </Container>
        </div>
    );
};

export default AllProducts;