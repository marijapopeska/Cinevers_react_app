import React from 'react'
import Hero from '../components/Hero/Hero'
import DiscoverMovies from '../components/MoviesCards/discoverMovies'
import HeaderWrapper from '../components/Header/HeaderWrapper'
import Footer from '../components/Footer/Footer'

const Home = () => {
    return (
        <>
            <HeaderWrapper/>
            <Hero />
            <DiscoverMovies title='Trending All Day' endpoint='/trending/all/day' />
            <DiscoverMovies title='Trending All Week' endpoint='/trending/all/week' />
            <DiscoverMovies title='Now Playing' endpoint='/movie/now_playing' />
            <DiscoverMovies title='Upcoming Movies' endpoint='/movie/upcoming' />
            <Footer/>
        </>
    )
}

export default Home