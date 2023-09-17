// src/components/Banner.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {AiFillPlayCircle} from 'react-icons/ai'

const Banner = () => {
  const [popularMovie, setPopularMovie] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    const fetchPopularMovie = async () => {
      const apiKey = '17b578c47751c844076a9dec1c6816a0'; // Replace with your API key
      try{
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        setPopularMovie(response.data.results); // Get the first popular movie
      }catch(err){
        return 
      }
      
    };

    fetchPopularMovie();
  }, []);

  useEffect(() => {
    if (popularMovie.length > 0) {
      // Generate a random index within the range of popularMovies array length
      const randomIndex = Math.floor(Math.random() * popularMovie.length);
      setRandomMovie(popularMovie[randomIndex]);
    }
  }, [popularMovie]);

  return (
    <div className="relative">
      {randomMovie && (
        <div
          className="bg-cover bg-center h-[600px]"
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${randomMovie.backdrop_path})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute inset-0 text-white p-4">
            <div className="container mx-auto flex items-center h-full">
              <div className="w-[404px]">
                <h2 className="text-4xl font-bold mb-2">{randomMovie.title}</h2>
                <p className="text-sm md:text-lg mb-4">{randomMovie.overview}</p>
                <p className="text-sm">
                  Release Date: {randomMovie.release_date} | Rating: {randomMovie.vote_average * 10} / 100
                </p>
                <div href className=''>
                  <button className='bg-[#BE123C] w-[196px] h-[36px] flex items-center  cursor-pointer py-[6px] px-[16px] rounded-md mt-[8px] font-bold'>
                    <AiFillPlayCircle className='h-[20px] w-[20px] mr-2  ' /> WATCH TRAILER</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
