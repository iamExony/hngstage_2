// src/components/MovieList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [top10Movies, setTop10Movies] = useState([]);

  useEffect(() => {
    const fetchTop10Movies = async () => {
      const apiKey = '17b578c47751c844076a9dec1c6816a0'; // API key
      let response = [];
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
        );
        setTop10Movies(response.data.results.slice(0, 10));
      } catch (err) {
        return console.log(err);
      }
    };

    fetchTop10Movies();
  }, []);

  return (
    <div className='container w-full mx-auto'>
      <h1>Top 10 Movies</h1>
      <div className='grid grid-cols-1 w-fit md:w-[90%] md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto '>
        {top10Movies &&
          top10Movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
