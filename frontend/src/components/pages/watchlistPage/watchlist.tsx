import "./watchlist.css";
import type { Watchlist } from "../../../types/watchlistType";
import MovieSearchBar from "../../common/MovieSearchBar/MovieSearchBar";
import MovieCard from "../../common/movieCard/movieCard";

type WatchListProps = {
    watchlist: Watchlist;
    setWatchlist: React.Dispatch<React.SetStateAction<Watchlist>>;
};

function WatchlistPage({ watchlist, setWatchlist }: WatchListProps) {
    function removeFromWatchlist(movieId: number) {
        const newWatchlistItems = watchlist.watchlistItems.filter(
            (item) => item.movieId !== movieId
        );

        setWatchlist({
            watchlistItems: newWatchlistItems,
        });
    }

    const movieListItems =
        watchlist.watchlistItems.length === 0 ? (
            <p className="no-movies-text">No movies in watchlist</p>
        ) : (
            watchlist.watchlistItems.map((movie) => (
                <div key={movie.movieId}>
                    <MovieCard
                        movie={[movie.movieTitle, "N/A", "No description available"]}
                    />
                    <button
                        type="button"
                        onClick={() => removeFromWatchlist(movie.movieId)}
                    >
                        Remove
                    </button>
                </div>
            ))
        );

    return (
        <div id="watchlist-page">
            <h1 id="title-header">My Watchlist</h1>
            <div id="search-and-watchlist">
                <MovieSearchBar addItemToList={setWatchlist} />
                <div id="movies">{movieListItems}</div>
            </div>
        </div>
    );
}

export default WatchlistPage;