import React, { useState } from 'react';
import { ArrowRightIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid';
import { videos } from './videosData';

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  const currentVideo = videos[currentVideoIndex];

  return (
    <div className="relative">
      {/* Loop through videos */}
      <div key={currentVideo.index} className="w-full h-[50vh] sm:h-[30vh] md:h-[60vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden">
        {/* YouTube video */}
        <div className="h-full w-full aspect-w-16 aspect-h-9 transform scale-150 sm:scale-200 md:scale-150">
          <iframe
            width='100%'
            height='100%'
            src={`${currentVideo.url}?rel=0&autoplay=1&playlist=${currentVideo.id}&loop=1&controls=0&modestbranding=1&mute=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        {/* Content */}
        <div className="absolute bottom-8 text-white md:bottom-8 md:px-8 md:py-4 xl:bottom-12 xl:px-8 xl:py-4 px-8">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-6">{currentVideo.title}</h1>
          <p className="text-base sm:text-base mb-6 max-w-xl md:hidden hidden lg:block">
            {currentVideo.description}
          </p>
        </div>
        {/* Action buttons */}
        <div className="md:flex items-center absolute bottom-4 left-8 right-8 xl:left-8 xl:right-8">
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
        </div>
        {/* Navigation arrows */}
        <div className='absolute left-0 bottom-1/2 md:flex items-center justify-between w-full px-8'>
          <button onClick={prevVideo}>
            <ChevronLeftIcon className="h-8 w-8 text-white" />
          </button>
          <button onClick={nextVideo}>
            <ChevronRightIcon className="h-8 w-8 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
