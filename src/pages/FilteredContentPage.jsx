import React from 'react'
import Header from '../components/Header/Header'
import DiscoverMovies from '../components/MoviesCards/discoverMovies'

const FilteredContentPage = ({ title, endpoint }) => {
    return (
        <div>
            <Header />
            <DiscoverMovies title={title} endpoint={endpoint} />
            <DiscoverMovies
                title={`Maybe You'll Be Interested`}
                endpoint='/trending/all/day'
            />
            <div className='mb-[100px]'></div>
        </div>
    )
}

export default FilteredContentPage