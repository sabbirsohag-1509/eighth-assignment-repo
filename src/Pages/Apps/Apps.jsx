import React from 'react';
import { useLoaderData } from 'react-router';
import App from '../App/App';

const Apps = () => {
    const appsData = useLoaderData()
    // console.log(appsData)

    return (
        <div className='max-w-6xl mx-auto mt-5'>
            <div> 
                <h1 className='text-3xl md:text-4xl text text-center font-bold'>Trending Apps</h1>
                <p className='text-gray-600 text-center pt-3 text-sm lg:text-lg '>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6'> 
                {
                    appsData.map(AppData => <App key={AppData.id} AppData={AppData}></App>)
                }
            </div>
            <div className='mt-8 text-center'> 
                <button className='btn px-8 text-xl  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-xl '>Show All</button>
            </div>
        </div>
    );
};

export default Apps;