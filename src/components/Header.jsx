import React from 'react';
import HeaderItem from './HeaderItem';
import { MenuIcon, SearchIcon, BellIcon } from '@heroicons/react/outline';

const Header = () => {
    return (
        <div>
            <header className='flex flex-row sm:flex-row m-5 justify-between items-center relative'>
                <div className='flex flex-grow max-w-2xl gap-6'>
                    <HeaderItem Icon={MenuIcon} />
                    <h2 className='hidden md:flex hover:text-white cursor-pointer font-lato'>
                        Movies
                    </h2>
                    <h2 className='hidden md:flex hover:text-white cursor-pointer font-lato'>
                        TV Series
                    </h2>
                </div>

                <h1 className='text-3xl font-semibold font-montserrat'>CINEVERS</h1>

                <div className='flex flex-grow max-w-2xl gap-6 items-center justify-end'>

                    <HeaderItem Icon={SearchIcon} hideOnMobile={true} />
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
