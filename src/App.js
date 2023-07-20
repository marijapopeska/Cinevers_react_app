import React from 'react';
import Hero from './components/Hero';
import Results from './components/Results';
import HeaderWrapper from './components/HeaderWrapper';

const App = () => {
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <HeaderWrapper/>
      </div>
      <Hero />
      <Results />
    </div>
  );
};

export default App;
