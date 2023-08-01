import React, { useEffect, useState } from 'react';
import { getMovies } from '../services/tmdbServices';
import MovieCard from './MovieCard';

const Results = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getMovies();
      if (response.results.length > 0) {
        return response.results;
      }
      return [];
    };

    setLoading(true);
    fetchMovies()
      .then((response) => {
        console.log(response);
        setMovies(response);
        setLoading(false);
      })
      .catch((error) => console.log);
  }, []);

  return (
    <div className='flex overflow-x-auto p-4 '>
      {loading === true ? (
        <h1>Loading...</h1>
      ) : (
        <div className='flex space-x-4'>
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
