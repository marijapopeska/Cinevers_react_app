import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-200">
      <img
        src='/assets/img/avatar_1.jpeg'
        alt='movie_img'
        className="w-full h-auto max-h-[810px]"
      />
     <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black mix-blend-multiply" />
    </div>
  );
};

export default Hero;


