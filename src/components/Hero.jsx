import React from 'react';
import { PlayIcon, ArrowRightIcon, VolumeOffIcon } from '@heroicons/react/solid';

const Hero = () => {
  return (
    <div className="relative">

      {/* Background image */}
      <img
        src='/assets/img/Avatar.jpg'
        alt='movie_img'
        className="hidden md:block w-full h-[50vh] sm:h-auto sm:max-h-[810px] object-cover"
      />

      {/* Mobile-only image */}
      <img
        src='/assets/img/avatar_2.jpeg'
        alt='movie_img_mobile'
        className="md:hidden w-full h-[50vh] max-h-[810px] object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />

      {/* Content */}
      <div className="absolute bottom-8 text-white md:bottom-8 md:px-8 md:py-4 xl:bottom-12 xl:px-8 xl:py-4 px-8">
        <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-6">Avatar: The Way of Water</h1>
        <p className="text-base sm:text-base max-w-xl md:hidden hidden lg:block">
          Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and Read more..
        </p>
      </div>

      {/* Action buttons and volume icon container */}
      <div className="md:flex items-center justify-between absolute bottom-0 left-8 right-8 xl:left-8 xl:right-8">

        {/* Action buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <div className="button-container">
            <button className="bg-white text-black border border-black py-2 px-4 rounded-full flex items-center space-x-2 w-full hover:bg-gray-200 hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
              <span>Watch Movie</span>
            </button>
          </div>
          <div className="button-container">
            <button className="bg-transparent text-white border-white border py-2 px-4 rounded-full flex items-center space-x-2 w-full hover:text-gray-200 hover:scale-105 transition-transform">
              <span>More Info</span>
              <ArrowRightIcon className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>

        {/* Volume icon */}
        <div className="flex hidden md:block items-center">
          <VolumeOffIcon className="h-6 w-6" />
        </div>
      </div>

      {/* Center the play button on mobile */}
      <div className="md:hidden absolute inset-x-0 bottom-1/2 flex items-center justify-center">
        <button className="bg-white bg-opacity-40 p-4 rounded-full flex items-center justify-center transform scale-100 transition-transform duration-300 hover:scale-110">
          <PlayIcon className="h-8 w-8 text-black" />
        </button>
      </div>

    </div>
  );
};

export default Hero;
