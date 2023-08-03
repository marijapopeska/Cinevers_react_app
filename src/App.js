import React from 'react';
import Hero from './components/Hero';
import HeaderWrapper from './components/HeaderWrapper';
import DiscoverMovies from './components/discoverMovies';

const App = () => {
  return (
    <div>
      <HeaderWrapper />
      <Hero />
      <DiscoverMovies title='Trending All Day' endpoint='/trending/all/day'/>
      <DiscoverMovies title='Trending All Week' endpoint='/trending/all/week'/>
      <DiscoverMovies title='Now Playing' endpoint='/movie/now_playing'/>
      <DiscoverMovies title='Upcoming Movies' endpoint='/movie/upcoming'/>
    </div>
  );
};

export default App;
