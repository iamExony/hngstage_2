import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';
import { AiFillPlayCircle } from 'react-icons/ai';

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //   console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className='w-full h-[600px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
        <img
          className='w-full h-full object-cover center center'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <p className='text-gray-400 text-sm'>
            Released: {movie?.release_date}
          </p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
            {truncateString(movie?.overview, 150)}
          </p>
          <div className='my-4'>
            <button className='flex space-x-3 border font-bold bg-pink-600 text-white border-pink-600 py-1 px-16'>
              <AiFillPlayCircle className='text-2xl'/>WATCH TRAILER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
