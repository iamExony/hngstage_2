import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // console.log(user.email)

  return (
    <div className="mw-64">
    <div className="absolute text-white flex items-center justify-between p-4 z-[100] w-full ">
      <Link to="/">
        <div className="flex justify-center space-x-3 items-center">
          <img className="shrink-0 sm: w-8 h-8" src="Logo.png" alt="Movie Logo" />
          <h1 className="text-pink-500 text-4xl font-bold cursor-pointer sm: text-2xl">
            MovieBox
          </h1>
        </div>
      </Link>
      <div>
          <div className="flex">
          <button className="text-white pr-4">Sign In</button>
          <img className="cursor-pointer text-white" src="Menu.png" />
      </div>
    </div>
    </div>
    </div>
  );
};

export default Navbar;
