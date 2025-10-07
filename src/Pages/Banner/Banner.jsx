import React from 'react';
import googleplay from '../../assets/googleplastore.png'
import appstore from '../../assets/apstore.png'


const Banner = () => {
    return (
        <div className='mt-5'>
           <div className='text-center space-y-5'> 
                <h1 className='text-6xl font-semibold text-[#040031]'>We Build <br />
                    <span className='text-[#632EE3]'>Productive</span> Apps</h1>
                <p className='text-gray-600 text-sm'>At <span className='font-semibold'>HERO.IO</span>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
           </div>
           
                <div className=' flex gap-8 items-center justify-center py-10'> 

                    <div className='flex gap-2 items-center border border-gray-300 py-2 px-5 cursor-pointer rounded'> 
                        <img className='w-6 h-7' src={googleplay} alt="" />
                        <button className='cursor-pointer'>Google Play</button>
                    </div>

                    <div className='flex gap-2 items-center border border-gray-300 py-2 px-5 cursor-pointer rounded'> 
                        <img className='w-6 h-7' src={appstore} alt="" />
                        <button className='cursor-pointer'>App Store</button>
                    </div>

                </div>

        </div>
    );
};

export default Banner;