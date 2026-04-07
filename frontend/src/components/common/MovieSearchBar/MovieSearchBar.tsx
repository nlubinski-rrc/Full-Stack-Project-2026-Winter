import { useState } from "react";
import "./MovieSearchBar.css";
import MovieCard from "../movieCard/movieCard";
import { useMovies } from "../../../hooks/movieHook";

function MovieSearchBar({
    addToWatchlist,
}: {
    addToWatchlist: (movieId: number) => Promise<void>;
}) {
    const { movies } = useMovies([]);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredMovies =
        searchTerm.trim() === ""
            ? []
            : movies.filter((movie) =>
                  movie.title.toLowerCase().includes(searchTerm.toLowerCase())
              );
    console.log(filteredMovies);
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
                {filteredMovies.length === 0 && searchTerm !== "" && <p>No results found</p>}

                {filteredMovies.map((movie) => (
                    <div key={movie.id}>
                        <div id="results">
                            <MovieCard
                                movie={[
                                    movie.title,
                                    movie.averageRating.toString(),
                                    movie.overview,
                                ]}
                            />
                        </div>
                        <button
                            type="button"
                            className="add-to-watchlist-button"
                            onClick={() => {
                                addToWatchlist(movie.id);
                            }}
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
