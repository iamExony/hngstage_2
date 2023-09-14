// src/components/Navbar.js

import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-semibold text-xl">Your Logo</div>
        
        {/* Search Bar */}
        <div className="w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Sign-in Button */}
        <button className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-100">Sign In</button>

        {/* Menu */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-white">Home</a>
          <a href="/movies" className="text-white">Movies</a>
          <a href="/tv-shows" className="text-white">TV Shows</a>
          {/* Add more menu items as needed */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
