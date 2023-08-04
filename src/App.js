import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import MoviesDetailsPage from './pages/MoviesDetailsPage';
import HeaderWrapper from './components/Header/HeaderWrapper';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderWrapper />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<MoviesDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
