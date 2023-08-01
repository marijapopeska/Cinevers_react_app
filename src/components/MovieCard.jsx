import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className='w-[300px] h-[500px] bg-white rounded-xl shadow-md overflow-hidden mx-4'>
      <img
        className='object-cover w-full h-3/4'
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className='p-4'>
        <p className='text-gray-500 font-lato'>{movie.release_date}</p>
        <p className=' text-gray-500 text-xl font-semibold font-lato'>{movie.title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
