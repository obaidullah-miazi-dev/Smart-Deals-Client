import React, { useState } from 'react';
import Container from './Container';
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';


const Navbar = () => {

    const Links = <>
        <NavLink to='/'
            className={({ isActive }) =>
                `${isActive ? "text-[#632EE3]" : ""
                }`
            }>
            <li className="hover:border-b-2 hover:border-[#632EE3] transition cursor-pointer font-semibold text-lg">Home</li>
        </NavLink>
        <NavLink to='/allProducts'
            className={({ isActive }) =>
                `${isActive ? "text-[#632EE3]" : ""
                }`
            }>
            <li className="hover:border-b-2 hover:border-[#632EE3] transition cursor-pointer font-semibold text-lg">All Products</li>
        </NavLink>
        <NavLink to='/myProducts'
            className={({ isActive }) =>
                `${isActive ? "text-[#632EE3]" : ""
                }`
            }>
            <li className="hover:border-b-2 hover:border-[#632EE3] transition cursor-pointer font-semibold text-lg">My Products</li>
        </NavLink>

        <NavLink to='/myBids'
            className={({ isActive }) =>
                `${isActive ? "btext[#632EE3]" : ""
                }`
            }>
            <li className="hover:border-b-2 hover:border-[#632EE3] transition cursor-pointer font-semibold text-lg">My Bids</li>
        </NavLink>

        <NavLink to='/createProduct'
            className={({ isActive }) =>
                `${isActive ? "btext[#632EE3]" : ""
                }`
            }>
            <li className="hover:border-b-2 hover:border-[#632EE3] transition cursor-pointer font-semibold text-lg">Create Product</li>
        </NavLink>
    </>


    const [open, setOpen] = useState(false);


    return (
        <nav className="w-full">
            <Container>
                <div className="mx-auto flex justify-between items-center h-12 my-4">
                    <div className="flex items-center gap-2">
                        <NavLink to='/'>
                            <h2 className='font-bold text-3xl'>Smart<span>Deals</span></h2>
                        </NavLink>
                    </div>

                    <ul className="hidden md:flex items-center gap-8  font-medium">
                        {Links}
                    </ul>

                    {/* button  */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="px-5 py-2.5 hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold rounded-full">Login</button>
                        <button className="px-5 py-2.5 hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center gap-2 text-white font-semibold rounded-full">Register</button>
                    </div>

                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 text-gray-700"
                    >
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {open && (
                    <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
                        <ul className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
                           {Links}

                            {/* button  */}
                            <div>
                                <button className="px-5 py-2.5 w-full mb-2 rounded-full hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center justify-center gap-2 text-white font-semibold">login</button>
                                <button className="px-5 py-2.5 w-full rounded-full hover:bg-gradient-to-br hover:from-[#5107ff] hover:to-[#8026ff] cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] transition flex items-center justify-center gap-2 text-white font-semibold">Register</button>
                            </div>
                        </ul>
                    </div>
                )}
            </Container>
        </nav>
    );
};

export default Navbar;