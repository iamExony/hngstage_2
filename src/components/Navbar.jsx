// src/components/Navbar.js
import Search from '../components/Search'

import React from 'react';

const NavBar = ({setMode,setMovie,setIsLoading}) => {
  return (
    <nav className="bg-transparent p-4 absolute z-[100] inset-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-semibold text-xl text-red-600">MovieBox</div>
        
        {/* Search Bar */}
        <Search setMode={setMode} setMovie={setMovie} setIsLoading={setIsLoading}/>

        {/* Sign-in Button */}
        <button className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-100">Sign In</button>

        {/* Menu */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-white">Menu</a>
          {/* Add more menu items as needed */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
