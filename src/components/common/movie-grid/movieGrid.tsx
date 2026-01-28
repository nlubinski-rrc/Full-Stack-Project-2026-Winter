import "./movieGrid.css";
import movieData from "../../../../testMovieData.json";
import MovieCard from "../movieCard/movieCard";

function MovieGrid() {
    const movieListItems = movieData["results"].map((movie) => {
        return <MovieCard movie={[movie.title, movie.vote_average.toString(), movie.overview]} />;
    });

    return <div id="movieGrid">{movieListItems}</div>;
}

export default MovieGrid;
