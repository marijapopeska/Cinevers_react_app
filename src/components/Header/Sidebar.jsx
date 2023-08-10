import { ChevronRightIcon } from '@heroicons/react/solid';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate()

    //Toggle body overflow based on the sidebar open/close state
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    const handleMoviesClick = () => {
        navigate('/discover/movie')
    }

    const handleTVClick = () => {
        navigate('/discover/tv')
    }

    return (
        <div
            className={` absolute h-screen top-0 left-0 w-full md:w-72 bg-black bg-opacity-100 md:bg-black md:bg-opacity-90 z-50 text-white p-4 transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            <button
                className="absolute top-8 right-4 text-white"
                onClick={onClose}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </button>
            <ul className="mt-12 font-lato">
                <Link to={'/'}>
                <li className="px-4 py-2 text-xl cursor-pointer">
                    Home
                </li>
                </Link>
                <li 
                onClick={handleMoviesClick}
                className="px-4 py-2 text-xl cursor-pointer">
                    Movies
                </li>
                <li 
                onClick={handleTVClick}
                className="px-4 py-2 text-xl cursor-pointer">
                    TV Series
                </li>
                <li className="px-4 py-2 text-xl border-b-[1px] border-gray-600 cursor-pointer">
                    Watch offline
                </li>
                <div className='flex justify-between border-b-[1px] border-gray-600 cursor-pointer'>
                    <li className="px-4 py-2 text-xl ">
                        Genres
                    </li>
                    <button className="hidden md:block">
                        <ChevronRightIcon className="h-8 w-8 text-white" />
                    </button>
                </div>
                
            </ul>
        </div>
    );
};

export default Sidebar;
