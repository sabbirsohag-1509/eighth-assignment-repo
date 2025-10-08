import React from 'react';
import googleplay from '../../assets/googleplastore.png'
import appstore from '../../assets/apstore.png'
import hero from '../../assets/hero.png'


const Banner = () => {
    return (
        <div className='mt-5'>
           <div className='text-center px-4 md:px-0 space-y-5'> 
                <h1 className="text-4xl md:text-6xl font-semibold text-[#040031] leading-tight">We Build <br />
                    <span className='text-[#632EE3]'>Productive</span> Apps</h1>
                <p className='text-gray-600 text-sm md:text-base max-w-3xl mx-auto'>At <span className='font-semibold'>HERO.IO</span>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
           </div>
           
                <div className=' flex flex-col sm:flex-row gap-5 justify-center items-center py-5'> 

                   <a href="https://play.google.com/store/games" target='_blank'> 
                     <div className='flex gap-2 items-center border border-gray-300 py-2 px-5 cursor-pointer rounded  bg-gray-300 hover:bg-gray-400 transition ease-in'> 
                        <img className='w-6 h-7' src={googleplay} alt="Google Play" />
                        <button className='cursor-pointer'>Google Play</button>
                    </div>
                   </a>

                   <a href="https://www.apple.com/store" target='_blank'> 
                     <div className='flex gap-2 items-center border border-gray-300 py-2 px-5 cursor-pointer rounded bg-gray-300 hover:bg-gray-400 transition ease-in'> 
                        <img className='w-6 h-7' src={appstore} alt="App Store" />
                        <button className='cursor-pointer'>App Store</button>
                    </div>
                   </a>
                </div>
                <div className='flex justify-center items-center'> 
                    <img className='w-full max-w-lg md:max-w-2xl' src={hero} alt="" />
                </div>

                <div className='w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-6 md:p-10 space-y-6'> 
                    <div className='text-center'> 
                        <h1 className='text-2xl md:text-3xl font-semibold text-white'>Trusted by Millions, Built for You</h1>
                    </div>

                    <div className='flex flex-col sm:flex-row flex-wrap gap-5 lg:gap-14 justify-center items-center pt-1 lg:pt-4'> 
                        <div className='flex flex-col justify-center items-center'> 
                            <p className='text-sm text-white py-2 lg:py-3'>Total Downloads</p>
                            <h1 className='text-4xl md:text-5xl font-bold text-white'>29.6M</h1>
                            <p className='text-sm text-white py-2 lg:py-3'>21% more than last month</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'> 
                            <p className='text-sm text-white py-2 lg:py-3'>Total Reviews</p>
                            <h1 className='text-4xl md:text-5xl font-bold text-white'>906K</h1>
                            <p className='text-sm text-white py-2 lg:py-3'>46% more than last month</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'> 
                            <p className='text-sm text-white py-2 lg:py-3'>Active Apps</p>
                            <h1 className='text-4xl md:text-5xl font-bold text-white'>132+</h1>
                            <p className='text-sm text-white py-2 lg:py-3'>31 more will Launch</p>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default Banner;