import React from 'react';
import footerLogo from '../../assets/logo.png';
import fb from '../../assets/fb.png';
import twitter from '../../assets/twitter.png';
import insta from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white py-8 px-4 lg:px-16 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between">
        
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <img className="w-10" src={footerLogo} alt="Hero.IO Logo" />
            <h1 className="text-2xl font-bold">Hero.IO Apps</h1>
          </div>
          <p className="text-gray-300 text-sm lg:text-base">
            Hero IO is an engaging multiplayer action game where players compete in fast-paced battles, level up their characters, unlock abilities, and dominate arenas with strategy, skill, and teamwork.
          </p>
        </div>

       
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-3">About Hero.IO Apps</h2>
          <p className="text-gray-200 text-sm lg:text-base">
            Hero IO lets you control powerful heroes in thrilling multiplayer battles, collect upgrades, master unique skills, and outsmart opponents to climb the leaderboard in fast-paced, action-packed arenas.
          </p>
        </div>

        
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-3">Social Links</h2>
          <div className="flex flex-col gap-3">

            <div className="flex items-center gap-3">
              <img className="w-8 h-8" src={fb} alt="" />
             <p className="text-white text-sm hover:underline">www.facebook.com</p>
            </div>

            <div className="flex items-center gap-3">
              <img className="w-8 h-8" src={twitter} alt="" />
              <p className="text-white text-sm hover:underline">www.twitter.com</p>
            </div>

            <div className="flex items-center gap-3">
              <img className="w-8 h-8" src={insta} alt="" />
              <p className="text-white text-sm hover:underline">www.instagram.com</p>
            </div>

            <div className="flex items-center gap-3">
              <img className="w-8 h-8" src={youtube} alt="" />
              <p className="text-white text-sm hover:underline">www.youtube.com</p>
            </div>

          </div>
        </div>

      </div>

      
      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; Hero.IO Apps. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
