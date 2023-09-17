// src/components/Navbar.js
import Search from '../components/Search'

import React from 'react';

const NavBar = ({setMode,setMovie,setIsLoading}) => {
  return (
    <nav className="bg-transparent p-4 absolute z-[100] inset-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex text-white items-center space-x-2 font-semibold text-xl text-red-600">
          <img src='/Logo.png' className='h-8 w-8' alt='logo'/>
          <span>MovieBox</span> 
          </div>
        
        {/* Search Bar */}
        <Search setMode={setMode} setMovie={setMovie} setIsLoading={setIsLoading}/>
        
        {/* Menu */}
        <div className="hidden md:flex space-x-4">
        {/* Sign-in Button */}
        <button className="bg-transparent text-white px-4 py-2 rounded-lg hover:bg-blue-100">Sign In</button>
          <a href="/" className="text-white">
            <img src='/Menu.png' alt='menu' />
          </a>
          {/* Add more menu items as needed */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
