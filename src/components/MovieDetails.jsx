// src/components/MovieDetails.js

import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  

  useEffect(() => {
    
    const fetchMovieDetails = async () => {
      
      const apiKey = '17b578c47751c844076a9dec1c6816a0'; // Replace with your API key
      const response = await axios.get(`https://api.themoviedb.org/3/movie/157336?api_key=17b578c47751c844076a9dec1c6816a0`);
      setMovie(response.data);
    };

    fetchMovieDetails();
  }, [movieId]);
  return (
    <div>
      {movie ? (
        <div className='text-black'>
          <h2 className='text-black'>{movie.title}</h2>
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
