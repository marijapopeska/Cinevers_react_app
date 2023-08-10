import { ChevronLeftIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundMessage = () => {
    return (
        <div className=' flex justify-center  mt-[100px] p-8'>
            <div>
                <p className='text-[42px] font-semibold font-montserrat '>Please don't be sad!</p>
                <p className='text-[20px] text-gray-400 font-extralight font-montserrat'>Stay hopeful! More movies could be on the way.</p>
                {/* Back to Home Link */}
                <Link to="/" className=" font-montserrat hidden mt-10 md:flex items-center cursor-pointer hover:text-gray-400 z-10">
                    <ChevronLeftIcon className="h-6 w-6 text-gray-400" />
                    <span>Back to Movie Magic</span>
                </Link>
            </div>
            <img
                src='/assets/img/png.png'
                alt='Not Found'
                className='w-1/3'
            />
        </div>
    );
};

export default NotFoundMessage;
