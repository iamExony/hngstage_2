// src/components/MovieDetails.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetails = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const movieId = match.params.id; // Assuming you are passing the movie ID as a route parameter
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
  }, [match.params.id]);

  return (
    <div className="container mx-auto px-4 py-8"> {/* Apply Tailwind container class */}
      {movieDetails ? (
        <div>
          <h2 className="text-2xl font-bold mb-2" data-testid="movie-title">
            {movieDetails.title}
          </h2>
          <p className="text-sm text-gray-600" data-testid="movie-release-date">
            Release Date (UTC): {movieDetails.release_date}
          </p>
          <p className="text-sm text-gray-600" data-testid="movie-runtime">
            Runtime (minutes): {movieDetails.runtime}
          </p>
          <p className="text-base my-4" data-testid="movie-overview">
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
