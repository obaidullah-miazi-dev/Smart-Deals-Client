// src/pages/ProductDetails.jsx
import React from 'react';
import { ArrowLeft, MessageCircle, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Link, useLoaderData } from 'react-router';

const ProductDetails = () => {
    const product = useLoaderData()
    console.log(product);
    const {image,category,condition,created_at,description,email,location,price_max,price_min,seller_contact,seller_image,seller_name,status,title,usage,_id} = product
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link to='/allProducts'>
        <button className="flex items-center gap-2 text-gray-700 hover:text-primary transition mb-6">
          <ArrowLeft className="w-5 h-5" />
          Back To Products
        </button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Image Placeholder */}
          <div className="lg:col-span-1">
            <div className="">
                <img src={image} className='bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-400' alt={title} />
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Price */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h1 className="text-3xl font-bold text-gray-900">
                {title}
              </h1>
              <p className="text-sm text-primary mt-1"> {category} </p>

              <div className="mt-4">
                <p className="text-3xl font-semibold">${price_min} - {price_max}</p>
                <p className="text-sm text-gray-500">Price starts from</p>
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Product Details
              </h2>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Product ID:</strong>{' '}
                  {_id}
                </p>
                <p>
                  <strong>Posted:</strong> {created_at}
                </p>
              </div>
            </div>

            {/* Product Description */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Product Description
              </h2>

              {/* Condition & Usage */}
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  Condition: {condition}
                </div>
                <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Calendar className="w-4 h-4" />
                  Usage : {usage}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {description}
              </p>
              
            </div>

            {/* Seller Information */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Seller Information
              </h2>

              <div className="flex items-center gap-4 mb-4">
                <div>
                  <img className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold" src={seller_image} alt={seller_name} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{seller_name}</p>
                  <p className="text-sm text-gray-500">{email}</p>
                </div>
              </div>

              <div className="space-y-2 text-gray-700">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <strong>Location:</strong> {location}
                </p>
                <p>
                  <strong>Contact:</strong>{' '}
                  <a href={`tel:${seller_contact}`} className="text-primary hover:underline">
                    {seller_contact}
                  </a>
                </p>
                <p>
                  <strong>Status:</strong>{' '}
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    {status}
                  </span>
                </p>
              </div>
            </div>

            {/* Buy Button - Full Width Gradient */}
            <button className="w-full bg-linear-to-r from-primary to-purple-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover-eff transition">
              Buy Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;