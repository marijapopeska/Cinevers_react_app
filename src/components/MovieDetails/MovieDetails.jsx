import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/tmdbServices';
import HeaderWrapper from '../Header/HeaderWrapper';
import { ChevronLeftIcon, DownloadIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

const MovieDetails = () => {
	// Get the movie ID from the URL parameters
	const { id } = useParams();

	// State to hold the movie details
	const [movie, setMovie] = useState(null);

	// Fetch movie details when the component mounts
	useEffect(() => {
		const fetchMovieDetails = async () => {
			try {
				// Fetch the movie details from the API using the movie ID
				const response = await getMovieDetails(id);
				setMovie(response);
			} catch (error) {
				console.log(error);
				setMovie(null);
			}
		};
		fetchMovieDetails();
	}, [id]);

	// If movie details are still loading, show a loading message
	if (!movie) {
		return <p>Loading...</p>;
	}

	// Extract relevant movie details for rendering
	const title = movie.title || movie.original_title;
	const date = movie.release_date;
	const overview = movie.overview;
	const genres = movie.genres || [];
	const voteAverage = movie.vote_average;

	return (
		<div>
			{/* Header */}
			<HeaderWrapper />

			{/* Main Content */}
			<div className="flex flex-col md:flex-row ml-8 mr-8 mt-24 md:mt-32 mb-8 z-0 relative justify-center md:justify-start ">
				{/* Movie Poster */}
				<img
					className="w-[400px] h-[400px md:h-[600px] mr-8 md:mr-8 object-cover rounded-md"
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={title}
				/>

				<div className="flex flex-col justify-between">
					{/* Movie Details */}
					<div className="text-white">
						<h1 className="text-3xl font-semibold mb-2">{title}</h1>
						<p className="text-gray-500 text-sm">{date}</p>
						<div className="flex mt-4">
							<StarIcon className="h-6 w-6 mr-1 text-yellow-300" />
							<p className="text-md font-semibold">{voteAverage}</p>
						</div>

						<div className="justify-start flex-wrap flex md:justify-start mb-8 md:ml-0 overflow-hidden ">
							{/* Render movie genres */}
							{genres.map((genre) => (
								<span
									key={genre.id}
									className="px-3 py-1 mr-2 mt-4 text-sm bg-transparent text-gray-300 border-gray-300 border rounded-full"
								>
									{genre.name}
								</span>
							))}
						</div>
						<p className="text-lg leading-relaxed lg:w-[60%] md:w-[100%]">{overview}</p>

						{/* Action buttons */}
						<div className="button-container md:flex items-center py-6">
							<button className="bg-white text-black border border-black py-2 px-4 rounded-full flex items-center justify-center space-x-2 w-full md:w-auto hover:bg-gray-200 hover:scale-105 transition-transform">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
									/>
								</svg>
								<span>Watch Movie</span>
							</button>
							<div className="button-container md:ml-4 mt-4 md:mt-0">
								<button className="bg-transparent text-gray-300 border-gray-300 border py-2 px-6 rounded-full flex items-center justify-center space-x-2 w-full md:w-auto  hover:scale-105 transition-transform">
									<DownloadIcon className="h-4 w-4 text-white" />
									<span>Download</span>
								</button>
							</div>
						</div>
					</div>

					{/* Back to Home Link */}
					<Link to="/">
						<div className=" hidden md:flex cursor-pointer hover:text-gray-300">
							<ChevronLeftIcon className="h-6 w-6 text-white" />
							Back to Home
						</div>
					</Link>
				</div>
			</div>

			{/* Movie Backdrop */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
					backgroundSize: 'cover',
					opacity: '0.1', 
				}}
			/>
		</div>
	);
};

export default MovieDetails;
