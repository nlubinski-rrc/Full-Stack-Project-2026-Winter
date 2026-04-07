import "./movieGrid.css";
import MovieCard from "../movieCard/movieCard";
import { useMovies } from "../../../hooks/useMovies";

function MovieGrid() {
    const { movies, err } = useMovies([]);
    const movieListItems = movies.map((movie) => {
        if (!err) {
            return (
                <MovieCard
                    key={movie.id}
                    movie={[movie.title, movie.averageRating.toString(), movie.overview]}
                />
            );
        } else {
            return <p>{err}</p>;
        }
    });

    return <div id="movieGrid">{movieListItems}</div>;
}

export default MovieGrid;
