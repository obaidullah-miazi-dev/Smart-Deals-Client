import React from 'react';
import { Search, PlayCircle } from 'lucide-react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="relative min-h-[380px] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
            <div className="absolute inset-0 opacity-30">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#a78bfa"
                        fillOpacity="0.3"
                        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96, 320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>

            <div className="relative container mx-auto px-4 py-16 flex flex-col items-center text-center space-y-8">


                <h1 className="text-5xl md:text-6xl font-bold leading-tight">Deal Your
                    <span className="text-primary"> Products</span>
                    <br />In A
                    <span className="text-primary"> Smart </span>
                    Way !
                </h1>



                <p className="text-gray-600 max-w-2xl text-lg">
                    SmartDeals helps you sell, resell, and shop from trusted local sellers —{' '}
                    all in one place!
                </p>



                <div className="w-full max-w-2xl">
                    <div className="flex items-center bg-white rounded-full shadow-lg p-2 pl-5 border border-gray-200">
                        <input
                            type="text"
                            placeholder="Search for Products, Categories..."
                            className="flex-grow outline-none text-gray-700 placeholder-gray-400"
                        />
                        <button className="bg-primary text-white p-3 rounded-full hover-eff transition">
                            <Search className="w-6 h-6" />
                        </button>
                    </div>
                </div>



                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to='/allProducts'>
                        <button className="bg-gradient border-2 border-transparent text-white px-8 py-3 rounded-lg font-medium shadow-md hover-eff flex items-center gap-2 justify-center cursor-pointer">
                            
                            See All Products
                        </button>
                    </Link>
                    <Link to='/createProduct'>
                        <button className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white duration-300 cursor-pointer">
                            Post an Product
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;