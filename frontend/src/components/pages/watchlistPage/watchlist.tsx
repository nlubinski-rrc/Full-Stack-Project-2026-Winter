import "./watchlist.css";
import type { Watchlist } from "../../../types/watchlistType";
import MovieSearchBar from "../../common/MovieSearchBar/MovieSearchBar";
import MovieCard from "../../common/movieCard/movieCard";
import { useEffect } from "react";
import { useWatchlist } from "../../../hooks/useWatchlist";

type WatchlistItem = {
    movieId: number;
    movieTitle: string;
};

type WatchListProps = {
    watchlist: Watchlist;
    setWatchlist: React.Dispatch<React.SetStateAction<Watchlist>>;
};

function WatchlistPage({ setWatchlist }: WatchListProps) {
    const isLoggedIn = true; // TEMP (replace with Clerk later)

    const {
        watchlistItems,
        loading,
        isFetching,
        isAdding,
        isRemoving,
        error,
        addToWatchlist,
        removeFromWatchlist,
    } = useWatchlist();

    useEffect(() => {
        setWatchlist({
            watchlistItems,
        });
    }, [watchlistItems, setWatchlist]);

    if (!isLoggedIn) {
        return (
            <div id="watchlist-page">
                <h1 id="title-header">My Watchlist</h1>
                <p className="no-movies-text">
                    Please log in to view and manage your watchlist.
                </p>
            </div>
        );
    }

    const movieListItems = loading ? (
        <p className="no-movies-text">Loading watchlist...</p>
    ) : watchlistItems.length === 0 ? (
        <p className="no-movies-text">No movies in watchlist</p>
    ) : (
        watchlistItems.map((movie: WatchlistItem) => (
            <div key={movie.movieId}>
                <MovieCard
                    movie={[movie.movieTitle, "N/A", "No description available"]}
                />
                <button
                    type="button"
                    disabled={isRemoving}
                    onClick={() => removeFromWatchlist(movie.movieId)}
                >
                    {isRemoving ? "Removing..." : "Remove"}
                </button>
            </div>
        ))
    );

    return (
        <div id="watchlist-page">
            <h1 id="title-header">My Watchlist</h1>
            <div id="search-and-watchlist">
                <MovieSearchBar onAddMovie={addToWatchlist} isAdding={isAdding} />
                {isFetching && !loading && (
                    <p className="no-movies-text">Refreshing watchlist...</p>
                )}
                {error && <p className="no-movies-text">{error}</p>}
                <div id="movies">{movieListItems}</div>
            </div>
        </div>
    );
}

export default WatchlistPage;