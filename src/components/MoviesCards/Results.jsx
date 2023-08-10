import React, { useEffect, useRef, useState } from 'react';
import { getMovies } from '../../services/tmdbServices';
import MovieCard from '../MoviesCards/MovieCard';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid';
import NotFoundMessage from '../NotFound/NotFoundMessage';

const Results = ({ endpoint }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const listRef = useRef();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies(endpoint);
        setMovies(response.results || []);
        console.log(response.results);
      } catch (error) {
        console.log(error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [endpoint]);

  useEffect(() => {
    setSlideNumber(0);
    setTranslateValue(0);
  }, [movies]);

  const handleResponsiveCardWidth = () => {

    // card widths for different screen sizes
    const cardWidths = {
      small: 216,
      medium: 309,
    };

    // Current screen size
    const screenWidth = window.innerWidth;
    let currentCardWidth = cardWidths.medium;

    if (screenWidth <= 640) {
      currentCardWidth = cardWidths.small;
    }
    return currentCardWidth;
  };

  const handleClick = (direction) => {
    const cardWidth = handleResponsiveCardWidth();
    const visibleCards = Math.floor(window.innerWidth / cardWidth);
    const maxSlideNumber = movies.length - visibleCards;

    if (direction === 'left') {
      if (slideNumber === 0) {
        // If at the leftmost edge, loop to the rightmost edge
        setSlideNumber(maxSlideNumber);
        setTranslateValue(-maxSlideNumber * cardWidth);
      } else {
        setSlideNumber(slideNumber - 1);
        setTranslateValue(translateValue + cardWidth);
      }
    } else if (direction === 'right') {
      if (slideNumber === maxSlideNumber) {
        // If at the rightmost edge, loop to the leftmost edge
        setSlideNumber(0);
        setTranslateValue(0);
      } else {
        setSlideNumber(slideNumber + 1);
        setTranslateValue(translateValue - cardWidth);
      }
    }
  };

  return (
    <div className='flex overflow-x-scroll scrollbar-hide w=[100%]'>
      {loading === true ? (
        <h1>Loading...</h1>
      ) : movies.length === 0 ? (
        <NotFoundMessage />
      ):(
        <div style={{ width: 'fit-content' }}>
          <div className='flex space-x-4 transition-transform duration-500 ease-in-out' ref={listRef} style={{ transform: `translateX(${translateValue}px)` }}>
            {movies.map((movie, index) => (
              <MovieCard movie={movie} />
            ))}
          </div>
          {/* Navigation arrows */}
          <div className='absolute left-0 right-0 flex md:flex items-center justify-center px-0 '>
            <button className='hidden md:block hover:scale-125'>
              <ChevronLeftIcon onClick={() => handleClick('left')} className='h-9 w-9 text-white' />
            </button>
            <button className='hidden md:block hover:scale-125'>
              <ChevronRightIcon onClick={() => handleClick('right')} className='h-9 w-9 text-white' />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;