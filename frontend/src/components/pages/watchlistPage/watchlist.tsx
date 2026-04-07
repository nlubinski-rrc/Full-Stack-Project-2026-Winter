import "./watchlist.css";
import MovieSearchBar from "../../common/MovieSearchBar/MovieSearchBar";
import MovieCard from "../../common/movieCard/movieCard";
import { useWatchlist } from "../../../hooks/useWatchlist";
import { useCallback } from "react";

function WatchlistPage() {
    const { watchlist, removeFromWatchlist, addToWatchlist } = useWatchlist([]);
    function removeWatchlistItem(movieId: number) {
        removeFromWatchlist(movieId);
    }
    console.log(watchlist);

    const handleAddToWatchlist = useCallback(
        (movieId: number) => {
            return addToWatchlist(movieId);
        },
        [addToWatchlist]
    );

    const movieListItems =
        watchlist.length === 0 ? (
            <p className="no-movies-text">No movies in watchlist</p>
        ) : (
            watchlist.map((movie) => (
                <div key={movie.id}>
                    <MovieCard
                        movie={[movie.title, movie.averageRating.toString(), movie.overview]}
                    />
                    <button type="button" onClick={() => removeWatchlistItem(movie.id)}>
                        Remove
                    </button>
                </div>
            ))
        );

    return (
        <div id="watchlist-page">
            <h1 id="title-header">My Watchlist</h1>
            <div id="search-and-watchlist">
                <MovieSearchBar addToWatchlist={handleAddToWatchlist} />
                <div id="movies">{movieListItems}</div>
            </div>
        </div>
    );
}

export default WatchlistPage;
