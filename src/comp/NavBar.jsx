import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="absolute  bg-transparent z-[100] w-full inset-0 h-14">
        <div className="flex justify-between  max-w-6xl mx-auto space-y-3  text-white font-primary">
          <div className="flex space-x-3 items-center">
            <div className="shrink-0">
              <a href="/">
                <img className="h-8 w-8 shrink-0" src="/Logo.png" alt="logo" />
              </a>
            </div>
            <a href="/" className="font-bold text-xl">
              MovieBox
            </a>
          </div>
          <div>
            <input
              className="form-input  h-4 w-96 p-3 outline-white rounded-lg bg-transparent border-white border-1.5 placeholder:text-white"
              type="text"
              placeholder="What do you want to watch?"
            />
          </div>
          <div className="flex space-x-4 items-center">
            <a href="/" className="font-normal">
              Sign In
            </a>
            <a href="/">
              <img className="h-8 w-8 shrink-0" src="/Menu.png" alt="Menu" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
