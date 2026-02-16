import "./watchlist.css";
import MovieCard from "../../common/movieCard/movieCard";
import { useMovies } from "../../../hooks/movieHook";
import type { Watchlist } from "../../../types/watchlistType";
import MovieSearchBar from "../../common/MovieSearchBar/MovieSearchBar";

type watchListProps = {
    watchlist: Watchlist;
    setWatchlist: React.Dispatch<React.SetStateAction<Watchlist>>;
};

function WatchlistPage({ watchlist, setWatchlist }: watchListProps) {
    const { movies } = useMovies([])
    let movieListItems;
    

    if (watchlist.watchlistItems.length === 0) {
        movieListItems = <p>No movies in watchlist</p>;
    }

    const movieIds = watchlist.watchlistItems.map((movie) => movie.movieId);

    if (movieIds.length === 0) {
        movieListItems = <p>No movies in watchlist</p>;
    } else {
        movieListItems = movies.map((movie) => {
            if (movieIds.includes(movie.Id)) {
                return (
                    <MovieCard
                        key={movie.Id}
                        movie={[movie.title, movie.averageRating.toString(), movie.overview]}
                    />
                );
            }
        });
    }

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
