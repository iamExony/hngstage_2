// src/components/Banner.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Banner = () => {
  const [popularMovie, setPopularMovie] = useState(null);

  useEffect(() => {
    const fetchPopularMovie = async () => {
      const apiKey = 'YOUR_TMDB_API_KEY'; // Replace with your API key
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      );
      setPopularMovie(response.data.results[0]); // Get the first popular movie
    };

    fetchPopularMovie();
  }, []);

  return (
    <div className="relative">
      {popularMovie && (
        <div
          className="bg-cover bg-center h-96"
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${popularMovie.backdrop_path})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute inset-0 text-white p-4">
            <div className="container mx-auto flex items-center h-full">
              <div className="w-1/2">
                <h2 className="text-4xl font-bold mb-2">{popularMovie.title}</h2>
                <p className="text-lg mb-4">{popularMovie.overview}</p>
                <p className="text-sm">
                  Release Date: {popularMovie.release_date} | Rating: {popularMovie.vote_average}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
