import React from 'react';
import error from '../../assets/error-404.png';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-3 lg:mt-8'>
            <div> 
                <img className='w-52 lg:w-64' src={error} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center'> 
                <h1 className='text-3xl lg:text-4xl font-bold'>Oopss, page not found!</h1>
                <p className='text-lg lg:text-xl font-semibold text-gray-600 py-5 text-center'>The page you are looking for is not available.</p>
                <Link to='/'> 
                    <button className='btn px-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-white'>Go Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;