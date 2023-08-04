import React from 'react';
import Header from '../Header/Header';

const HeaderWrapper = () => {
  return (
    <div className=' absolute top-0 left-0 right-0 z-10 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 ease-in-out'>
      <Header />
    </div>
  );
};

export default HeaderWrapper;


