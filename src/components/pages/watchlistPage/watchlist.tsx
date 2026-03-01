import "./watchlist.css";
import MovieCard from "../../common/movieCard/movieCard";
import movieData from "../../../../testMovieData.json";
import type { Watchlist } from "../../../types/watchlistType";
import MovieSearchBar from "../../common/MovieSearchBar/MovieSearchBar";

type watchListProps = {
    watchlist: Watchlist;
    setWatchlist: React.Dispatch<React.SetStateAction<Watchlist>>;
};

function WatchlistPage({ watchlist, setWatchlist }: watchListProps) {
    let movieListItems;
    function removeFromWatchlist(movieId: number) {
        const newWatchlistItems = watchlist.watchlistItems.filter((item) => item.movieId !== movieId)
            setWatchlist({
                watchlistItems: newWatchlistItems
    })
            
        }

    if (watchlist.watchlistItems.length === 0) {
        movieListItems = <p>No movies in watchlist</p>;
    }

    const movieIds = watchlist.watchlistItems.map((movie) => movie.movieId);

    if (movieIds.length === 0) {
        movieListItems = <p className="no-movies-text">No movies in watchlist</p>;
    } else {
        movieListItems = movieData["results"].map((movie) => {
            if (movieIds.includes(movie.id)) {
                return (
                    <div>
                        <MovieCard
                        key={movie.Id}
                        movie={[movie.title, movie.averageRating.toString(), movie.overview]}
                    />
                    <button type="button" onClick={() => removeFromWatchlist(movie.Id)}>Remove</button>
                    </div>

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
