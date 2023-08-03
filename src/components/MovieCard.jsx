import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className='w-[100px] h-[200px] md:w-[293px] md:h-[500px] mt-6 bg-black rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out'>
      <img
        className='object-cover w-full h-3/4'
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className='pt-4'>
        <p className='text-gray-400 text-xs md:text-sm font-lato'>{movie.release_date}</p>
        <p className=' text-gray-400 text-sm md:text-xl font-semibold font-lato'>{movie.title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
