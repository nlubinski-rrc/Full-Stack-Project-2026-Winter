import "./watchedmovies.css";
import React, { useState } from "react";
import moviesData from "../jsonMovies";

interface Movie {
    id: number;
    title: string;
    vote_average: number;
    overview: string;
    watched: boolean;
}

function WatchedMovies() {
    const [searchTerm, setSearchTerm] = useState("");

    const [movies, setMovies] = useState<Movie[]>(
        moviesData.map((movie) => ({
            id: movie.id,
            title: movie.title,
            vote_average: movie.rating,
            overview: movie.description,
            watched: false,
        }))
    );

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const watchedMovies = filteredMovies.filter((movie) => movie.watched);
    const unwatchedMovies = filteredMovies.filter((movie) => !movie.watched);

    const toggleWatched = (movieId: number) => {
        setMovies((prevMovies) =>
            prevMovies.map((movie) =>
                movie.id === movieId ? { ...movie, watched: !movie.watched } : movie
            )
        );
    };

    return (
        <>
            <input
                type="text"
                className="search-input"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchTerm(e.target.value)
                }
            />

            <h2>Watched Movies ({watchedMovies.length})</h2>
            <div className="movie-grid">
                {watchedMovies.map((movie) => (
                    <div key={movie.id} className="movie-card watched">
                        <h3>{movie.title}</h3>
                        <div>Rating: {movie.vote_average}</div>
                        <div>{movie.overview}</div>
                        <button onClick={() => toggleWatched(movie.id)}>
                            Mark Unwatched
                        </button>
                    </div>
                ))}
            </div>

            <h2>To Watch ({unwatchedMovies.length})</h2>
            <div className="movie-grid">
                {unwatchedMovies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <h3>{movie.title}</h3>
                        <div>Rating: {movie.vote_average}</div>
                        <div>{movie.overview}</div>
                        <button onClick={() => toggleWatched(movie.id)}>
                            Mark Watched
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default WatchedMovies;