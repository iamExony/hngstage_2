// src/App.js

import React, { useState,useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieDetails from './page/MovieDetails';
import MovieList from './components/MovieList';
import NavBar from '../src/components/Navbar';
import Banner from './components/Banner';
import SearchComponent from './components/SearchComponent';
import Loading from './components/Loading';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:movieId' element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  const [mode , setMode] = useState("home")
  const [movie,setMovie] = useState([])
  const [isLoading,setIsLoading] = useState(false)


  // const [isLoading , setIsLoading] = useState("home")
  return (
    <div className='flex flex-col w-full mx-auto'>
      <NavBar setMode={setMode} setMovie ={setMovie} setIsLoading={setIsLoading}/>
      <Banner />
      <h1 className='text-white'>Movie App</h1>
      <div className='flex justify-between w-4/5 mx-auto'>
      <h1 className='text-black text-[30px] font-serif '>Feautured Movies</h1>
      <a className='text-red-700' href="">See More</a>
      </div>
      
      {/* Display a list of movies here with links to their details */}
      {mode === "home" ? (
        <MovieList />
      ): isLoading ? <Loading/> : (<SearchComponent searchResults={movie}/>)}
      <Footer/>
    </div>
  );
};

export default App;
