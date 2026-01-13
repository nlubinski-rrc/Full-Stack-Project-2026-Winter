import "./movieGrid.css";
import movieData from "../../../../testMovieData.json"

function MovieGrid() {

    const movieListItems = movieData["results"].map((movie) => {
        return (
            <div>
                {movie.title}
            </div>
        );
    });

    return (
        <div id="movieGrid">
            {movieListItems}
        </div>
    );
}

export default MovieGrid;