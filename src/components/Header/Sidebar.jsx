import { ChevronDownIcon } from '@heroicons/react/outline';
import { ChevronRightIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
    const [isGenresOpen, setIsGenresOpen] = useState()
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

    const handleGenresClick = () => {
        setIsGenresOpen(!isGenresOpen)
    }

    const handleCloseSidebar = () => {
        setIsGenresOpen(false)
        onClose()
    }

    return (
        <div
            className={` absolute h-screen top-0 left-0 w-full md:w-72 bg-black bg-opacity-100 md:bg-black md:bg-opacity-95 z-50 text-white p-4 transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            <button
                className="absolute top-8 right-4 text-white"
                onClick={handleCloseSidebar}
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
                <div onClick={handleGenresClick} className='flex justify-between border-b-[1px] border-gray-600 cursor-pointer'>
                    <li
                        className="px-4 py-2 text-xl ">
                        Genres
                    </li>
                    <button className="hidden md:block">
                        <ChevronRightIcon className="h-8 w-8 text-white" />
                    </button>
                    <button className="md:hidden">
                        <ChevronDownIcon className="h-8 w-8 text-white" />
                    </button>
                </div>
            </ul>
            {isGenresOpen && (
                <ul className='md:absolute h-screen top-0 left-72 w-full md:w-72 bg-black bg-opacity-100 md:bg-black md:bg-opacity-95 z-50 text-white p-4 transform transition-transform duration-500'>
                    <li className=" md:mt-12 md:py-2 text-xl cursor-pointer">Action</li>
                    <li className=" py-2 text-xl cursor-pointer">Adventure</li>
                    <li className=" py-2 text-xl cursor-pointer">Animation</li>
                    <li className=" py-2 text-xl cursor-pointer">Comedy</li>
                    <li className=" py-2 text-xl cursor-pointer">Crime and mystery</li>
                    <li className=" py-2 text-xl cursor-pointer">Fantasy</li>
                    <li className=" py-2 text-xl cursor-pointer">Historical</li>
                    <li className=" py-2 text-xl cursor-pointer">Horror</li>
                    <li className=" py-2 text-xl cursor-pointer">Romance</li>
                    <li className=" py-2 text-xl cursor-pointer">Satire</li>
                    <li className=" py-2 text-xl cursor-pointer">Science fiction</li>
                    <li className=" py-2 text-xl cursor-pointer">Thriller</li>
                </ul>
            )}
        </div>
    );
};

export default Sidebar;
