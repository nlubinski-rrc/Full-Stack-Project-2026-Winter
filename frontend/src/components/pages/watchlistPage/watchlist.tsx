import "./watchlist.css";
import MovieSearchBar from "../../common/MovieSearchBar/MovieSearchBar";
import MovieCard from "../../common/movieCard/movieCard";
import { useWatchlist } from "../../../hooks/useWatchlist";

function WatchlistPage() {
    const { watchlist, removeFromWatchlist } = useWatchlist([]);
    function removeWatchlistItem(movieId: number) {
        removeFromWatchlist(movieId);
    }

    const movieListItems =
        watchlist.length === 0 ? (
            <p className="no-movies-text">No movies in watchlist</p>
        ) : (
            watchlist.map((movie) => (
                <div key={movie.id}>
                    <MovieCard movie={[movie.title, "N/A", "No description available"]} />
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
                <MovieSearchBar />
                <div id="movies">{movieListItems}</div>
            </div>
        </div>
    );
}

export default WatchlistPage;
