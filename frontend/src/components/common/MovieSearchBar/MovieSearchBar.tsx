import { useState } from "react";
import "./MovieSearchBar.css";
import MovieCard from "../movieCard/movieCard";
import type { Watchlist } from "../../../types/watchlistType";
import movies from "../jsonMovies";

type SearchBarProps = {
    addItemToList: React.Dispatch<React.SetStateAction<Watchlist>>;
};

function MovieSearchBar({ addItemToList }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredMovies =
        searchTerm.trim() === ""
            ? []
            : movies.filter((movie) =>
                  movie.title.toLowerCase().includes(searchTerm.toLowerCase())
              );

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

    return (
        <form>
            <div id="input-fields">
                <input
                    type="search"
                    placeholder="Search Movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <p>Results</p>

            <div id="search-results">
                {filteredMovies.length === 0 && searchTerm !== "" && (
                    <p>No results found</p>
                )}

                {filteredMovies.map((movie) => (
                    <div key={movie.id}>
                        <div id="results">
                            <MovieCard
                                movie={[
                                    movie.title,
                                    movie.rating.toString(),
                                    movie.description,
                                ]}
                            />
                        </div>
                        <button
                            type="button"
                            className="add-to-watchlist-button"
                            onClick={() => addToWatchlist(movie.id, movie.title)}
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