import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import ShowAllApp from '../ShowAllApp/ShowAllApp';
import { IoIosSearch } from 'react-icons/io';

const ShowAllApps = () => {
    const allApps = useLoaderData()
    // console.log(allApps)

    useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

    return (
        <div className='max-w-6xl mx-auto mt-8'>
            <div className='text-center'> 
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p className='text-[16px] text-gray-600 py-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex items-center justify-between'> 
                <p className='text-lg font-semibold'>(<span>{allApps.length}</span>) Apps Found</p>
                <div className='relative w-56'>
                    <IoIosSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl' />
                    <input
                        type='search'
                        placeholder='Search Apps'
                        className='w-full border rounded-lg pl-10 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400 transition'
                    />
                </div>
            </div>

            <div  className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 mt-10'>

             {
               allApps.map(allApp => <ShowAllApp key={allApp.id} allApp={allApp}></ShowAllApp>)
             }

            </div>

        </div>
    );
};

export default ShowAllApps;