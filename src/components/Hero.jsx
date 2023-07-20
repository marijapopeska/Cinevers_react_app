import React from 'react';
import { PlayIcon, ArrowRightIcon } from '@heroicons/react/solid';

const Hero = () => {
  return (
    <div className="relative">
      <img
        src='/assets/img/Avatar.jpg'
        alt='movie_img'
        className=" hidden md:block w-full h-[50vh] sm:h-auto sm:max-h-[810px] object-cover"
      />

       {/* Mobile-only image */}
       <img
        src='/assets/img/avatar_2.jpeg'
        alt='movie_img_mobile'
        className="md:hidden w-full h-[50vh] max-h-[810px] object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black mix-blend-multiply z-1" />

      <div className="absolute bottom-0 px-4 py-2 text-white w-full sm:w-auto md:bottom-0 md:px-8 md:py-4 md:w-auto xl:bottom-0 xl:px-8 xl:py-4 xl:w-auto">
        {/* Adjust h1 size for mobile */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 hidden md:block">Avatar: The Way of Water</h1>
        <p className="text-sm sm:text-base mb-6 max-w-xl hidden md:block">
          Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and Read more..
        </p>

        <div className="hidden md:flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2">
          <button className="bg-white text-black border border-black py-2 px-3 rounded-full flex items-center space-x-2">
            <PlayIcon className="h-4 w-4 text-black" />
            <span>Watch Movie</span>
          </button>
          <button className="bg-transparent text-white border-white border py-2 px-3 rounded-full flex items-center space-x-2">
            <span>More Info</span>
            <ArrowRightIcon className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>

      {/* Center the play button on mobile */}
      <div className="md:hidden absolute inset-x-0 bottom-1/2 flex items-center justify-center">
        <button className="bg-white bg-opacity-50 p-4 rounded-full flex items-center justify-center transform scale-100 transition-transform duration-300 hover:scale-110">
          <PlayIcon className="h-8 w-8 text-black" />
        </button>
      </div>

      {/* Show only the h1 element on mobile */}
      <h1 className="md:hidden text-xl font-bold text-white text-center bottom-4 absolute inset-x-0">Avatar: The Way of Water</h1>
    </div>
  );
};

export default Hero;
