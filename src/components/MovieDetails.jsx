// src/components/MovieDetails.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState(null);
  

  useEffect(() => {
    
    const fetchMovieDetails = async () => {
      const movieId = match.params.movieId;
      const apiKey = '17b578c47751c844076a9dec1c6816a0'; // Replace with your API key
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
      setMovie(response.data);
    };

    fetchMovieDetails();
  }, [match.params.movieId]);

  return (
    <div>
      {movie ? (
        <div className='text-white'>
          <h2>{movie.title}</h2>
          <p>Release Date: {movie.release_date}</p>
          <p>Overview: {movie.overview}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>Runtime: {movie.runtime} minutes</p>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
