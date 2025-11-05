import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Root;