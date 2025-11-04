// src/pages/ProductDetails.jsx
import React, { use, useEffect, useRef, useState } from 'react';
import { ArrowLeft, MessageCircle, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const ProductDetails = () => {
    const product = useLoaderData()
    const { user } = use(AuthContext)
    const modalbox = useRef(null)
    const [bids, setBids] = useState([])
    // console.log(product);
    const { image, category, condition, created_at, description, email, location, price_max, price_min, seller_contact, seller_image, seller_name, status, title, usage, _id } = product

    const handleModal = () => {
        modalbox.current.showModal()
    }

    const handleModalClose = () => {
        modalbox.current.close()
    }

    const handleBidSubmit = (e) => {
        e.preventDefault()
        const buyerName = e.target.buyerName.value
        const buyerEmail = e.target.buyerEmail.value
        const buyerImageUrl = e.target.buyerImageUrl.value
        const offeredPrice = e.target.offeredPrice.value
        const contactInfo = e.target.contactInfo.value
        // console.log(buyerName, buyerEmail, buyerImageUrl, offeredPrice, contactInfo);
        if(offeredPrice.length == 0){
            return alert('please place your bid price')
        }
        const newBid = { buyerName, buyerEmail, buyerImageUrl, offeredPrice, contactInfo, productId: _id,image,title,seller_image,seller_name,price_max,price_min,email }
        // console.log(newBid);
        fetch('https://smart-deals-db-server.onrender.com/bids', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBid)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('after placing bids', data);
                if (data.insertedId) {
                    alert('bids placed successfully')
                    newBid._id= data.insertedId
                    const newBids = [...bids,newBid]
                    newBids.sort((a,b)=> b.offeredPrice - a.offeredPrice)
                    setBids(newBids)
                    modalbox.current.close()
                }
            })


    }

    useEffect(() => {
        axios(`https://smart-deals-db-server.onrender.com/products/bids/${_id}`)
            .then(data => {
                // console.log('bids collection for this product', data);
                setBids(data.data)
            })
    }, [_id])

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="w-11/12 mx-auto">
                {/* Back Button */}
                <Link to='/allProducts'>
                    <button className="flex items-center gap-2 text-gray-700 hover:text-primary transition mb-6">
                        <ArrowLeft className="w-5 h-5" />
                        Back To Products
                    </button>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Image Placeholder */}
                    <div className="lg:col-span-1 space-y-5">
                        <div>
                            <img src={image} className='bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-400' alt={title} />
                        </div>
                        {/* Product Description */}
                        <div className="bg-white h- rounded-xl p-6 shadow-sm">
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

                                    <form onSubmit={handleBidSubmit} className="space-y-6">
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


                                            <button onClick={handleModalClose} formMethod='dialog'
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


                {/* bids display  */}
                <div>
                    <h2 className='font-bold mt-16 mb-5 text-2xl md:text-5xl'>Bids For This Product : <span className='text-primary'>{bids.length}</span></h2>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Buyer Info</th>
                                    <th>Email</th>
                                    <th>Bid Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {bids.map((bid, index) =>

                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={bid?.buyerImageUrl}
                                                            alt={bid.buyerName} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{bid.buyerName}</div>
                                                    <div className="text-sm opacity-50">
                                                        Bangladesh</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{bid.buyerEmail}</td>
                                        <td>{bid.offeredPrice}</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>
                                    {/* row 2 */}

                                </tbody>
                            )}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;