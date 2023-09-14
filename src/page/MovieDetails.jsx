// src/components/MovieDetails.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const apiKey = '17b578c47751c844076a9dec1c6816a0'; // Replace with your API key

    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);
  console.log(movieDetails);

  return (
    <div className='container mx-auto px-4 py-8'>
      {' '}
      {/* Apply Tailwind container class */}
      {movieDetails ? (
        <div className="flex flex-col items-center">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className='mt-4 rounded-lg'
          />
          <h2 className='text-2xl font-bold mb-2' data-testid='movie-title'>
            {movieDetails.title}
          </h2>
          <p className='text-sm text-gray-600' data-testid='movie-release-date'>
            Release Date (UTC): {movieDetails.release_date}
          </p>
          <p className='text-sm text-gray-600' data-testid='movie-runtime'>
            Runtime (minutes): {movieDetails.runtime}
          </p>
          <p className='text-base my-4' data-testid='movie-overview'>
            {movieDetails.overview}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
