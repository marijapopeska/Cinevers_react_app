import React from 'react'
import MovieDetails from '../components/MovieDetails/MovieDetails'
import { useParams } from 'react-router-dom'

const MoviesDetailsPage = () => {
  const { id } = useParams()
  return (
    <>
    <MovieDetails id={id} />
    </>
  )
}

export default MoviesDetailsPage
