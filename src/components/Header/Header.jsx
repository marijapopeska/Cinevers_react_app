import React from 'react';
import HeaderItem from '../Header/HeaderItem'
import { MenuIcon, SearchIcon, BellIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className='flex sm:flex-row m-8 mt-6 mb-6 justify-between items-center'>
                <div className='flex flex-grow max-w-2xl gap-6'>
                    <HeaderItem Icon={MenuIcon} />
                    <h2 className='hidden md:flex hover:text-white cursor-pointer font-lato'>
                        Movies
                    </h2>
                    <h2 className='hidden md:flex hover:text-white cursor-pointer font-lato'>
                        TV Series
                    </h2>
                </div>
                <Link to={'/'}>
                    <h1 className='text-2xl sm:text-3xl md:text-2xl xl:text-3xl font-semibold font-montserrat'>CINEVERS</h1>
                </Link>

                <div className='flex flex-grow max-w-2xl gap-6 items-center justify-end font-lato'>
                    <div className='hidden md:flex border-b-[1px] border-white items-center p-1 focus-within:border-primary'>
                        <input type="text"
                            className=' bg-transparent outline-0 flex-1'
                            placeholder='Search...'
                        />
                        <HeaderItem Icon={SearchIcon} hideOnMobile={true} />
                    </div>
                    <HeaderItem Icon={BellIcon} hideOnMobile={true} />

                    <div className='flex flex-row cursor-pointer hover:scale-125 transition-transform'>
                        <img
                            className='w-6 h-6 rounded-full object-cover'
                            src='/assets/img/3d_avatar_7.png'
                            alt='User'
                        />
                    </div>

                </div>
            </header>
        </div>
    );
};

export default Header;