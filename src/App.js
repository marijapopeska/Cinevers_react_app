import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import MoviesDetailsPage from './pages/MoviesDetailsPage';
import SearchResults from './components/SearchResults/SearchResults';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<MoviesDetailsPage />} />
          <Route path='search' element={<SearchResults/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
