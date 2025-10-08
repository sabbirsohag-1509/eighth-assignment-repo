import React from 'react';
import { FaStar } from 'react-icons/fa';
import { GoDownload } from 'react-icons/go';
import { Link } from 'react-router';

const App = ({AppData}) => {
    // console.log(AppData)
    return (
            <div> 
                <Link to={`/appDetails/${AppData.id}`}> 
                <div className="card bg-base-100 w-40 h-44 lg:w-64 lg:h-72 shadow-[0_5px_15px_rgba(0,0,0,0.3)]  p-4 mt-5 hover:scale-105 transition-transform duration-300 ease-in-out">
                <figure className="px-10 pt-10">
                    <img
                    src={AppData.image}
                    alt="Shoes"
                    className="rounded-xl w-40 h-40 lg:w-48 lg:h-48 object-cover lg:object-cover" />
                </figure>
                    <div> 
                        <h1 className='text-sm md:text-lg lg:text-[16px] font-semibold pt-3 text-gray-700'>{AppData.title}</h1>
                    </div>


                    <div className='flex items-center justify-between pt-5'> 
                        <div className='flex items-center gap-1 text-green-700 text-sm font-semibold bg-green-100 rounded-2xl px-3'> 
                            <GoDownload />
                            {AppData.downloads}
                        </div>
                        <div className='flex items-center gap-1 text-amber-600 bg-amber-100 text-sm px-3 rounded-2xl'> 
                            <FaStar />
                            {AppData.ratingAvg}
                        </div>
                    </div>
                </div>
                </Link>
            </div>
    );
};

export default App;