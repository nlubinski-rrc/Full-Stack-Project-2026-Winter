import { useWatchlistSearch } from "../../../hooks/useWatchlistSearch";
import "./MovieSearchBar.css";
import MovieCard from "../movieCard/movieCard";
import type { Watchlist } from "../../../types/watchlistType";

type SearchBarProps = {
    addItemToList: React.Dispatch<React.SetStateAction<Watchlist>>;
};

function MovieSearchBar({ addItemToList }: SearchBarProps) {
    const { searchTerm, setSearchTerm, results, search, loading } = useWatchlistSearch();

    function addToWatchlist(movieId: number, movieTitle: string) {
        addItemToList((prev) => {
            if (prev.watchlistItems.some((item) => item.movieId === movieId)) {
                return prev;
            }

            return {
                ...prev,
                watchlistItems: [...prev.watchlistItems, { movieId, movieTitle }],
            };
        });
    }

    function handleSearch(value: string) {
        setSearchTerm(value);
        search(value);
    }

    return (
        <form>
            <div id="input-fields">
                <input
                    type="search"
                    placeholder="Search Movies"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>

            <p>Results</p>

            <div id="search-results">
                {loading && <p>Loading...</p>}

                {!loading && results.length === 0 && searchTerm !== "" && (
                    <p>No results found</p>
                )}

                {!loading &&
                    results.map((movie) => (
                        <div key={movie.movieId}>
                            <div id="results">
                                <MovieCard
                                    movie={[
                                        movie.movieTitle,
                                        "N/A",
                                        "No description available",
                                    ]}
                                />
                            </div>
                            <button
                                type="button"
                                className="add-to-watchlist-button"
                                onClick={() =>
                                    addToWatchlist(movie.movieId, movie.movieTitle)
                                }
                            >
                                Add to Watchlist
                            </button>
                        </div>
                    ))}
            </div>
        </form>
    );
}

export default MovieSearchBar;