import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import MoviesDetailsPage from './pages/MoviesDetailsPage';
import SearchResults from './components/SearchResults/SearchResults';
import FilteredContentPage from './pages/FilteredContentPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<MoviesDetailsPage />} />
          <Route path='search' element={<SearchResults />} />
          <Route path='discover/movie' element={<FilteredContentPage title='Movies' endpoint={'/discover/movie'}/>} />
          <Route path='discover/tv' element={<FilteredContentPage title='TV Series' endpoint={'/discover/tv'}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
