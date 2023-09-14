import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className='movie-card w-[250px] ml-7 text-black' data-testid='movie-card'>
      <Link to={`/movie/${movie.id}`}>
        <div className='bg-cover'>
          <img
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt={movie.title}
            data-testid='movie-poster'
            height="460px"
            width="250px"
          />
        </div>
      </Link>

      <h2 className='text-xl' data-testid='movie-title'>{movie.title}</h2>
      <p data-testid='movie-release-date'>
        Release Date: {movie.release_date}
      </p>
    </div>
  );
}

export default MovieCard;