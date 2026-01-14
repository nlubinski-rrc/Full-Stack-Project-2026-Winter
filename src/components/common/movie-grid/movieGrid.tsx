import "./movieGrid.css";
import movieData from "../../../../testMovieData.json"

function MovieGrid() {

    const movieListItems = movieData["results"].map((movie) => {
        return (
            <div className="movieCard">
                <h3 className="cardTitle">
                    {movie.title}
                </h3>
                <div>Rating: {movie.vote_average}</div>
                <div>{movie.overview}</div>
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