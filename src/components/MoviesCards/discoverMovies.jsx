import React from 'react';
import Results from '../MoviesCards/Results';

const DiscoverMovies = ({ title, endpoint }) => {
 
    return (
        <div className="relative">
            <h2 className="text-2xl font-semibold mt-8 mx-8 animate-pulse">{title}</h2>
            <div className='mx-8'>
                <Results endpoint={endpoint} />
            </div>
        </div>
  );
};

export default DiscoverMovies;
