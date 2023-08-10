import React from 'react';
import Results from '../MoviesCards/Results';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import DiscoverMovies from '../MoviesCards/discoverMovies';

const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');

    // Endpoint for searching movies by exact title match and sorting by title
    const searchEndpoint = `/search/movie?query=${query}&sort_by=title.asc&include_adult=false`;

    return (
        <div>
            <Header />
            <div>
                <div className=' ml-8'>
                <Results endpoint={searchEndpoint} />
                </div>
                <div className=''>
                <DiscoverMovies 
                title= {`Maybe You'll Be Interested`} 
                endpoint='/trending/all/day'
                 />
                </div>
                <div className='mb-[100px]'></div>
            </div>
        </div>
    );
};

export default SearchResults;

