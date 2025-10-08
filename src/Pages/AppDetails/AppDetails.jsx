import React from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { GoStarFill } from 'react-icons/go';
import { RiDownload2Fill } from 'react-icons/ri';
import { Link, useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const apps = useLoaderData();
  const { appId } = useParams(); 
  const appsId = parseInt(appId);
//   console.log(appId)

  const appDetail = apps.find(app => app.id === appsId);
//   console.log(appDetail);

    return (
    <div>
       <div className='max-w-6xl mx-auto px-4 mt-10 flex flex-col lg:flex-row gap-8'> 
            <div> 
                <img   className='w-full max-w-xs h-56 lg:w-72 lg:h-60 object-cover rounded shadow-2xl' src={appDetail.image} alt="" />
            </div>
                    {/* .. */}
            <div> 
                <div className='space-y-3'> 
                <h1 className='text-xl lg:text-3xl font-bold text-gray-800'>{appDetail.title}</h1>
                <p className='text-sm lg:text-[16px] font-semibold text-[#632EE3] pb-2'><span className='text-gray-600 font-bold'>Developed by:</span> {appDetail.companyName}</p>
                
                <div className='border-b border-gray-600 w-full'></div>
            </div>
                        {/* .... */}
                <div className='flex flex-col sm:flex-row gap-6 lg:gap-12 pt-5 justify-start sm:justify-between items-start sm:items-center'> 
                    <div className='space-y-1'> 
                        <RiDownload2Fill className='text-green-600 font-bold text-xl'/>
                        <p className='text-sm lg:text-base text-gray-600 font-semibold'>Downloads</p>
                        <h1 className='text-xl lg:text-2xl font-bold'>{appDetail.downloads}</h1>
                    </div>
                    <div className='space-y-1'> 
                        <GoStarFill className='text-amber-500 font-bold text-xl' />
                        <p className='text-sm lg:text-base text-gray-600 font-semibold'>Average Ratings</p>
                        <h1 className='text-xl lg:text-2xl font-bold'>{appDetail.ratingAvg}</h1>
                    </div>
                    <div className='space-y-1'> 
                        <BiSolidLike className='text-[#642ee3c1] font-bold text-xl'/>
                        <p className='text-sm lg:text-base text-gray-600 font-semibold'>Total Reviews</p>
                        <h1 className='text-xl lg:text-2xl font-bold'>{appDetail.reviews}</h1>
                    </div>
                </div>

                                            {/* install btn  */}
                <div className='pt-8'> 
                    <Link> 
                        <button className='w-full sm:w-auto btn px-8 lg:px-10 bg-green-600 rounded text-lg text-white'>Install Now ({appDetail.size})</button>
                    </Link>
                </div>
            </div>
       </div>
            
      </div> 
    );
};

export default AppDetails;