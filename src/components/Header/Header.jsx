import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderItem from '../Header/HeaderItem';
import { MenuIcon, SearchIcon, BellIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const handleMenuClick = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleCloseSidebar = (event) => {
        setIsSidebarOpen(false)
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchQuery.trim() === ''){
            navigate('/')
        }else{
            navigate(`/search?q=${searchQuery}`);
        }
    };

    return (
        <div>
            <header className='flex sm:flex-row m-8 mt-6 mb-6 justify-between items-center'>
                <div className='flex flex-grow max-w-2xl gap-6'>
                    <div className=' cursor-pointer' onClick={handleMenuClick}>
                        <HeaderItem Icon={MenuIcon} />
                    </div>
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
                    <div className={`flex ${isSearchOpen ? 'border-b-[1px] border-white items-center p-1 focus-within:border-primary transition-all' : ''}`}>
                        {isSearchOpen && (
                            <form onSubmit={handleSearchSubmit} >
                                <input
                                    type='text'
                                    className='bg-transparent outline-0 flex-1'
                                    placeholder='Search...'
                                    style={{ width: isSearchOpen ? '200px' : '0' }}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </form>
                        )}
                        <HeaderItem
                            Icon={SearchIcon}
                            hideOnMobile={true}
                            onClick={handleSearchClick}
                        />
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
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={handleCloseSidebar} />
        </div>
    );
};

export default Header;
