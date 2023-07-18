import React from 'react'
import HeaderItem from './HeaderItem'

import {
    HomeIcon,
} from '@heroicons/react/outline';

const Header = () => {
    return (
        <header>
            <div>
                <HeaderItem title='Home' Icon={HomeIcon} />
            </div>
        </header>
    )
}

export default Header