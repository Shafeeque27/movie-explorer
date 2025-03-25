import React from 'react';
import { useNavigate } from 'react-router-dom';
import starIcon from '/star.svg';

const MovieCard = ({
    movie: {
        id,
        title,
        vote_average,
        poster_path,
        release_date,
        original_language,
    },
}) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/movie/${id}`)} className="movie-card">
            <img
                src={
                    poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : '/No-Poster.png'
                }
                alt={title}
            />

            <div className="mt-4">
                <h3>{title}</h3>

                <div className="content">
                    <div className="rating">
                        <img src={starIcon} alt="star icon" />
                        <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>

                        <span>•</span>
                        <p className="lang">{original_language}</p>
                        <span>•</span>
                        <p className="year">
                            {release_date ? release_date.split('-')[0] : 'N/A'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
