import React from 'react';
import Navbar from './../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Navbar></Navbar>

            <Outlet></Outlet>
            <Footer></Footer>


            

             {navigation.state === "loading" && (
                <div className="fixed inset-0 bg-opacity-20 flex items-center justify-center z-50 ">
                    <h1 className=' text-2xl lg:text-3xl font-bold tracking-[10px] text-[#291260cf]'>L<span className="loading loading-spinner loading-3xl text-2xl lg:text-3xl tracking-[10px]"> </span>ADING....</h1>   
                </div>
                )}

        </div>
    );
};

export default Root;