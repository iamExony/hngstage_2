// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import Banner from './components/Banner';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="/movie/:movieId" element={<MovieList />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <h1 className='text-white'>Movie App</h1>
      {/* Display a list of movies here with links to their details */}
    </div>
  );
};

export default App;
