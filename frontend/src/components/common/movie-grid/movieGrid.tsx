import "./movieGrid.css";
import MovieCard from "../movieCard/movieCard";
import { useMovies } from "../../../hooks/movieHook";

function MovieGrid() {
    const { movies, err } = useMovies([])
    const movieListItems = movies.map((movie) => {
        if (!err) {
            return <MovieCard key={movie.Id} movie={[movie.title, movie.averageRating.toString(), movie.overview]} />;
        } else {
            return <p>{err}</p>
        }

    });

    return <div id="movieGrid">{movieListItems}</div>;
}

export default MovieGrid;
