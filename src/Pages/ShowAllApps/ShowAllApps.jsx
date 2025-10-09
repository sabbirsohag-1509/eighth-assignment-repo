import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import ShowAllApp from '../ShowAllApp/ShowAllApp';
import { IoIosSearch } from 'react-icons/io';
import appNotFound from '../../assets/App-Error.png'

const ShowAllApps = () => {
    const allApps = useLoaderData()
    // console.log(allApps)

    useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
//   console.log(search)
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term ? allApps.filter(allApp => allApp.title .toLocaleLowerCase().includes(term)) : allApps;
//   console.log(searchedApps)

const handleSearchBtn = (e) =>{
    
    const value = e.target.value;
    setSearch(value)

    
    setLoading(true);

    setTimeout(()=>{
        setLoading(false);
    },400);
}
console.log(loading)

    return (
        <div className='max-w-6xl mx-auto mt-8'>
            <div className='text-center'> 
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p className='text-[16px] text-gray-600 py-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex items-center justify-between'> 
                <p className='text-lg font-semibold'>(<span>{searchedApps.length}</span>) Apps Found</p>

                                    {/* search input here  */}

                <div className='relative w-56'>
                    <IoIosSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl' />
                    <input 
                        value={search}
                        onChange={handleSearchBtn}
                        type='search'
                        placeholder='Search Apps'
                        className=' w-full border rounded-lg pl-10 pr-3 py-1 text-[16px] outline-none focus:ring-2 focus:ring-purple-400 transition'
                    />

                     {loading && (
                        <div className="fixed inset-0 bg-opacity-20 flex items-center justify-center z-50 ">
                            <h1 className=' text-2xl lg:text-3xl font-bold tracking-[10px] text-[#291260cf]'>L<span className="loading loading-spinner loading-3xl text-2xl lg:text-3xl tracking-[10px]"> </span>ADING....</h1>   
                        </div>
                        )}
                </div>
            </div>
                                        {/* .............. */}

                                        
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 mt-10">
                {!loading && searchedApps.length > 0 ? (
                searchedApps.map((app) => (
                    <ShowAllApp key={app.id} allApp={app} />
                ))
                ) : (
                !loading && (
                    <div className="col-span-full flex flex-col justify-center items-center">
                    <img className='w-40 lg:w-52' src={appNotFound} alt="" />
                    <h2 className='text-2xl lg:text-4xl font-bold text-gray-700 pt-3' >
                        NO APPS FOUND!!
                    </h2>
                        <Link to='/'> 
                            <button className='btn mt-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[15px] font-semibold text-white'>Visit Home</button>
                        </Link>
                    </div>
                )
             )}
         </div>
    </div>
  );
};

export default ShowAllApps;