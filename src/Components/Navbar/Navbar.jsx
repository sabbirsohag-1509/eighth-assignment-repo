import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li><NavLink to="/" className={({isActive}) => isActive?"border-b-3 border-[#632EE3] font-bold":"border-b-3 border-transparent"}>Home</NavLink></li>
            <li><NavLink to="/showAllApps" className={({isActive}) => isActive?"border-b-3 border-[#632EE3] font-bold":"border-b-3 border-transparent"}>Apps</NavLink></li>
            <li><NavLink to="/installationApp" className={({isActive}) => isActive?"border-b-3 border-[#632EE3] font-bold":"border-b-3 border-transparent"}>Installation</NavLink></li>
          </ul>
        </div>
        
        <div> 
            <Link to='/'> 
                <div className='flex items-center gap-1'> 
                <img className='w-7 lg:w-10 h-7 lg:h-10' src={logo} alt="Logo" />
                <span className="btn-ghost text-xl lg:text-2xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">HERO.IO</span> 
                </div>
            </Link>
        </div>

      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className='text-[16px] font-semibold'><NavLink to="/" className={({isActive}) => isActive?"border-b-3 border-[#632EE3] font-bold":"border-b-3 border-transparent"}>Home</NavLink></li>

          <li className='text-[16px] font-semibold' ><NavLink to="/showAllApps" className={({isActive}) => isActive?"border-b-3 border-[#632EE3] font-bold":"border-b-3 border-transparent"}>Apps</NavLink></li>

          <li className='text-[16px] font-semibold' ><NavLink to="/installationApp" className={({isActive}) => isActive?"border-b-3 border-[#632EE3] font-bold":"border-b-3 border-transparent"}>Installation</NavLink></li>
        </ul>
      </div>
        
        
      <div className="navbar-end relative flex items-center gap-2">
        <div className='absolute right-27'> 
            <img className='w-[15px] h-[15px]' src="/github.png" alt="GitHub" />
        </div>
        <a href="https://github.com/sabbirsohag-1509" target="_blank" rel="noopener noreferrer">
            <div className=" text-[16px] text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-2 px-7 pl-10 rounded">
            Contribute
            </div>
        </a>
    </div>
    </div>
  );
};

export default Navbar;
