import React, { useState, useEffect } from 'react';
import { getMovieDetails } from '../../services/tmdbServices';

const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState(null);


  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetails(id);
        setMovie(response);
      } catch (error) {
        console.log(error);
        setMovie(null);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const title = movie.title || movie.name;
  const date = movie.release_date || movie.first_air_date;

  return (
    <>
      <div className="w-[100%] md:h-[500px] bg-black shadow-md overflow-hidden">
        <img
          className="object-cover w-full"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={title}
        />
      </div>
      <div className="">
        <p >{date}</p>
        <p >{title}</p>
      </div>
    </>
  );
};

export default MovieDetails;
