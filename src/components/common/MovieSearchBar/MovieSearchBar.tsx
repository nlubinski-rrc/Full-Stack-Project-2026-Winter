import { useState } from "react";
import movieData from "../../../../testMovieData.json";
import "./MovieSearchBar.css";
import MovieCard from "../movieCard/movieCard";
import type { JSX } from "react";
import type { Watchlist } from "../../../types/watchlistType";

type SearchBarProps = {
    addItemToList: React.Dispatch<React.SetStateAction<Watchlist>>;
};

function MovieSearchBar({ addItemToList }: SearchBarProps) {
    const [searchQuery, setQuery] = useState("");
    const [filteredResults, setResults] = useState<JSX.Element[]>([]);

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

    function searchData(e?: React.FormEvent) {
        if (e) {
            e.preventDefault();
        }

        const movieResults = [];
        let recordsPrinted = 0;
        for (const movie of movieData["results"]) {
            if (
                movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
                recordsPrinted < 4
            ) {
                recordsPrinted += 1;
                movieResults.push(
                    <div key={movie.id}>
                        <div id="results">
                            <MovieCard
                                movie={[movie.title, movie.vote_average.toString(), movie.overview]}
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
                );
            }
        }
        setResults(movieResults);
    }
    function updateResults(searchValue: string) {
        if (searchValue === "") {
            setResults([]);
        } else {
            setQuery(searchValue);
            searchData();
        }
    }
    return (
        <form>
            <div id="input-fields">
                <input
                    type="search"
                    placeholder="Seach Movies"
                    onChange={(e) => updateResults(e.target.value)}
                />
            </div>

            <p>Results</p>

            <div id="search-results">{filteredResults}</div>
        </form>
    );
}

export default MovieSearchBar;
