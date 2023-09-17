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
    <div className="flex">
    {/* Left-side Navbar */}
    <div className="w-1/4 bg-blue-500 p-4 text-white rounded-r-lg">
      <div className="mb-4">
        <img
          src="/logo.png" // Replace with your logo path
          alt="Logo"
          className="w-16 h-16 mx-auto"
        />
        <h1 className="text-2xl font-bold text-center">Your App Name</h1>
      </div>
      <ul className="space-y-2">
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/search" className="hover:underline">
            Search
          </a>
        </li>
        <li>
          <a href="/tv-series" className="hover:underline">
            TV Series
          </a>
        </li>
        <li>
          <a href="/upcoming" className="hover:underline">
            Upcoming
          </a>
        </li>
      </ul>
    </div>

    {/* Right-side Movie Details */}
    <div className="w-3/4 p-4">
      {movieDetails ? (
        <div>
          <div
            className="h-96 bg-cover bg-center rounded-md"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`
            }}
          />
          <div className="flex mt-4">
            <div className="w-1/3">
              <img
                src={`https://image.tmdb.org/t/p/w185${movieDetails.poster_path}`}
                alt={movieDetails.title}
                className="w-full"
              />
            </div>
            <div className="w-2/3 pl-4">
              <h2 className="text-2xl font-bold text-black">{movieDetails.title}</h2>
              <p className="text-xl text-gray-600">
                Runtime: {movieDetails.runtime} min
              </p>
              <p className="text-xl text-gray-600">
                Release Date: {movieDetails.release_date}
              </p>
              <p className="text-xl text-gray-600">
                Country of Release: {movieDetails.production_countries[0]?.name}
              </p>
              <p className="text-xl text-black">
              <h2 className="text-2xl font-bold text-black">Review:</h2>
                {movieDetails?.overview}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  </div>
  );
};

export default MovieDetails;
