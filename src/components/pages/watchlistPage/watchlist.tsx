import "./watchlist.css"
import MovieCard from "../../common/movieCard/movieCard"
import movieData from "../../../../testMovieData.json";
import type { Watchlist } from "../../../assets/types/watchlistType";

type watchListProps = {
    watchlist: Watchlist
    setWatchlist: React.Dispatch<React.SetStateAction<Watchlist>>
}

function WatchlistPage({ watchlist }: watchListProps) {

    let movieListItems

    if (watchlist.watchlistItems.length === 0) {
        movieListItems = <p>No movies in watchlist</p>
    }

    const movieIds = watchlist.watchlistItems.map(movie => movie.movieId)

    if (movieIds.length === 0) {
        movieListItems = <p>No movies in watchlist</p>
    } else {
        movieListItems = movieData["results"].map((movie) => {
            if (movieIds.includes(movie.id)) {
                return <MovieCard key={movie.id} movie={[movie.title, movie.vote_average.toString(), movie.overview]} />;
            }
        });
    }

    return (
        <div id="watchlist-page">
            <h1 id="title-header">My Watchlist</h1>
            <div id="movies">{movieListItems}</div>
        </div>
    )
}

export default WatchlistPage