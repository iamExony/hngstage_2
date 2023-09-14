// src/components/MovieList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [top10Movies, setTop10Movies] = useState([]);

  useEffect(() => {
    const fetchTop10Movies = async () => {
      const apiKey = '17b578c47751c844076a9dec1c6816a0'; // API key
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
      );
      setTop10Movies(response.data.results.slice(0, 10));
    };

    fetchTop10Movies();
  }, []);

  return (
    <div>
      <h1>Top 10 Movies</h1>
      <div className="movie-grid">
        {top10Movies.map((movie) => (
          <div className="movie-card" key={movie.id} data-testid="movie-card">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                alt={movie.title}
                data-testid="movie-poster"
              />
              <h2 data-testid="movie-title">{movie.title}</h2>
              <p data-testid="movie-release-date">Release Date: {movie.release_date}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
