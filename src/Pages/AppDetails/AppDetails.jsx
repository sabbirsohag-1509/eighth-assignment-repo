import React, { useState } from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { GoStarFill } from 'react-icons/go';
import { RiDownload2Fill } from 'react-icons/ri';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import Charts from '../Charts/Charts';

const AppDetails = () => {
        const apps = useLoaderData();
        const { appId } = useParams(); 
        const appsId = parseInt(appId);
        const appDetail = apps.find(app => app.id === appsId);
//   console.log(appDetail);
                    // .......... 

  const navigation = useNavigate();

  const [installed, setInstalled] = useState(()=>{
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    return installedApps.some(app => app.id === appDetail.id)
  });



  

  const handleInstall = () => {

  const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    // console.log(installedApps)
  if (!installedApps.find(app => app.id === appDetail.id)) {
    installedApps.push(appDetail);
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
    // alert(`${appDetail.title} installed successfully!`);
    Swal.fire({
  title: `${appDetail.title} Installed Successfully!`,
  icon: "success"
});
  } else {
    // alert(`${appDetail.title} is already installed.`);
    Swal.fire({
  icon: "error",
  title: `${appDetail.title} is already installed.`,
});
  }

  setInstalled(true);
};



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
                <div className='flex justify-between pt-8'> 
                  <div> 
                      <Link> 
                        <button onClick={handleInstall} disabled={installed} className='w-full sm:w-auto  px-3 py-1.5 lg:px-10 bg-green-600 rounded text-lg text-white cursor-pointer disabled:bg-green-400 disabled:cursor-not-allowed'>{installed?"Installed":`Install Now (${appDetail.size})`}</button>
                    </Link>
                  </div>


                  <div> 
                    <button onClick={()=> navigation(-1)} className='btn px-7 bg-green-400 rounded text-sm text-white font-bold'> ←Back</button>
                  </div>
                </div>
            </div>
       </div>


                
                                    {/* // Recharts Section & Description */}
            
            <div className='max-w-6xl mx-auto mt-10'> 
              <div className='pl-10'> 
              <h1 className='text-xl font-semibold'>Ratings:</h1>
              </div>
                <Charts ratings={appDetail.ratings}></Charts>
            </div>

                {/* Descriotion  */}

            <div className='max-w-6xl mx-auto'> 
                <h1 className='text-xl font-bold text-gray-700'>Description:</h1>
                <p className='pt-2 text-gray-700'>{appDetail.description}</p>
            </div>


      </div> 
    );
};

export default AppDetails;