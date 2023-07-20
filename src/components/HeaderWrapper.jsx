import React from 'react';
import Header from './Header';

const HeaderWrapper = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
      <Header />
    </div>
  );
};

export default HeaderWrapper;