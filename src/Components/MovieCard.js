import React from 'react';

const Movie = ({movie, selectMovie}) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"

    return (
        <div onClick={() => selectMovie(movie)} className="movie">
            <div className="movie-title">
                <div className='img-div'>{movie.poster_path &&
                <img src={IMAGE_PATH + movie.poster_path} alt={movie.title}/>
                }{movie.vote_average ? <span className="movie-voting">{movie.vote_average.toFixed(1)}</span> : null}</div>
                <div className="flex between movie-infos">
                    <h5 className="movie-title">{movie.title}</h5>  
                </div>
            </div>
        </div>
    );
};


export default Movie;