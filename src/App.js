import React from 'react';
import Hero from './components/Hero';
import HeaderWrapper from './components/HeaderWrapper';
import DiscoverMovies from './components/discoverMovies';

const App = () => {
  return (
    <div>
      <HeaderWrapper />
      <Hero />
      <DiscoverMovies title='Discover Movies' endpoint='/discover/movie'/>
      <DiscoverMovies title='Discover TV' endpoint='/discover/tv'/>
    </div>
  );
};

export default App;
