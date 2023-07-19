import React from 'react';
import HeaderItem from './HeaderItem';

import {
    MenuIcon,
    SearchIcon,
    BellIcon,
} from '@heroicons/react/outline';

const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
            <div className='flex flex-grow max-w-2xl gap-6'>
                <HeaderItem Icon={MenuIcon} />
                <h2 className='hover:text-white cursor-pointer font-lato'>Movies</h2>
                <h2 className='hover:text-white cursor-pointer font-lato'>TV Series</h2>
            </div>

            <h1 className=' text-3xl font-semibold font-montserrat'>CINEVERS</h1>

            <div className='flex flex-grow max-w-2xl gap-6 items-center justify-end'>
                <HeaderItem Icon={SearchIcon} />
                <HeaderItem Icon={BellIcon} />
                <div className='relative w-6 h-6'>
                    <img
                        className='w-full h-full rounded-full object-cover'
                        src='/assets/img/3d_avatar_7.png'
                        alt='User'
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;