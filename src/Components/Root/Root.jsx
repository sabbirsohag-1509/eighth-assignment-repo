import React from 'react';
import Navbar from './../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-6xl mx-auto'> 
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;