// src/components/SearchMovies.js

import React, { useState,useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const SearchMovies = ({setMode,setMovie,setIsLoading}) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const apiKey = '17b578c47751c844076a9dec1c6816a0'; // Replace with your API key

  const handleSearch = async () => {
    setMode("search")
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1`
      );
      setMovie(response.data.results)
    } catch (error) {
      console.error('Error fetching search results:', error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    if (query !== '') {
      const timeoutId = setTimeout(() => {
        handleSearch();
      }, 1000); // Adjust the delay time (in milliseconds) as needed

      setSearchTimeout(timeoutId);
    }
    else{
      setMode("home")
    }
  }, [query]);

  return (
    <div className='text-black'>
      <input
      className='rounded-md w-96 bg-transparent border-white placeholder:text-white'
        type="text"
        placeholder="What movie do you want to watch?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchMovies;
