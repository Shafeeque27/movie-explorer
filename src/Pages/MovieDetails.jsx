import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
    },
};

const MovieDetails = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(
                    `${API_BASE_URL}/movie/${id}`,
                    API_OPTIONS
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch movie details');
                }

                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error('Failed to fetch movie details', error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return (
            <div>
                <Spinner />
            </div>
        );
    }

    return (
            <div className="max-w-3xl my-3 mx-auto  p-6 bg-gray-900 text-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center mb-6 text-blue-400">
                    {movie.title}
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                        className="w-64 h-auto rounded-lg shadow-md"
                    />
                    <div>
                        <h2 className="text-xl font-semibold text-gray-300 mb-3">
                            Overview
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            {movie.overview}
                        </p>
                    </div>
                </div>
            </div>
    );
};

export default MovieDetails;
