// src/pages/ProductDetails.jsx
import React, { use, useRef } from 'react';
import { ArrowLeft, MessageCircle, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const ProductDetails = () => {
    const product = useLoaderData()
    const { user } = use(AuthContext)
    const modalbox = useRef(null)
    // console.log(product);
    const { image, category, condition, created_at, description, email, location, price_max, price_min, seller_contact, seller_image, seller_name, status, title, usage, _id } = product

    const handleModal = () => {
        modalbox.current.showModal()
    }

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
                        <button onClick={handleModal} className="w-full bg-linear-to-r from-primary
                         to-purple-700 text-white py-2.5 rounded-xl font-semibold text-lg shadow-lg
                          hover-eff transition cursor-pointer">
                            Buy Product
                        </button>


                        {/* modal  */}
                        <dialog ref={modalbox} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div className="max-w-2xl mx-auto p-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                        Give Seller Your Offered Price
                                    </h2>

                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Buyer Name */}
                                            <div>
                                                <label htmlFor="buyerName" className="block text-sm
                                                 font-medium text-gray-700 mb-1">
                                                    Buyer Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="buyerName"
                                                    name="buyerName"
                                                    defaultValue={user?.displayName}
                                                    className="w-full px-4 py-2 border border-gray-300 
                                                    rounded-lg focus:ring-2 focus:ring-primary
                                                    focus:border-transparent outline-none transition"
                                                />
                                            </div>

                                            {/* Buyer Email */}
                                            <div>
                                                <label htmlFor="buyerEmail" className="block text-sm
                                                 font-medium text-gray-700 mb-1">
                                                    Buyer Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="buyerEmail"
                                                    name="buyerEmail"
                                                    defaultValue={user?.email}
                                                    className="w-full px-4 py-2 border border-gray-300
                                                     rounded-lg focus:ring-2 focus:ring-primary
                                                      focus:border-transparent outline-none 
                                                      transition"
                                                />
                                            </div>
                                        </div>

                                        {/* Buyer Image URL */}
                                        <div>
                                            <label htmlFor="buyerImageUrl" className="block text-sm
                                             font-medium text-gray-700 mb-1">
                                                Buyer Image URL
                                            </label>
                                            <input
                                                type="url"
                                                id="buyerImageUrl"
                                                name="buyerImageUrl"
                                                placeholder='https://example.com/avatar.jpg'
                                                defaultValue={user?.photoURL}
                                                className="w-full px-4 py-2 border border-gray-300
                                                 rounded-lg focus:ring-2 focus:ring-primary
                                                  focus:border-transparent outline-none transition"
                                            />
                                        </div>

                                        {/* Place your Price */}
                                        <div>
                                            <label htmlFor="offeredPrice" className="block text-sm
                                             font-medium text-gray-700 mb-1">
                                                Place your Price
                                            </label>
                                            <input
                                                type="text"
                                                id="offeredPrice"
                                                name="offeredPrice"
                                                placeholder='Place Your Price'
                                                className="w-full px-4 py-2 border border-gray-300
                                                 rounded-lg focus:ring-2 focus:ring-primary 
                                                 focus:border-transparent outline-none transition"
                                            />
                                        </div>

                                        {/* Contact Info */}
                                        <div>
                                            <label htmlFor="contactInfo" className="block text-sm
                                             font-medium text-gray-700 mb-1">
                                                Contact Info
                                            </label>
                                            <input
                                                type="tel"
                                                id="contactInfo"
                                                name="contactInfo"
                                                placeholder="Your Contact Number"
                                                className="w-full px-4 py-2 border border-gray-
                                                rounded-lg focus:ring-2 focus:ring-primary
                                                focus:border-transparent outline-none transition"
                                            />
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex justify-end gap-4 pt-4">


                                            <button formMethod='dialog'
                                                className="px-6 py-2.5 h-full border border-gray-300
                                 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition
                                  cursor-pointer">
                                                Close
                                            </button>


                                            <button
                                                type="submit"
                                                className="px-6 py-2.5 bg-primary text-white rounded-lg
                                                 hover-eff transition shadow-md font-medium"
                                            >
                                                Submit Bid
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </dialog>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;