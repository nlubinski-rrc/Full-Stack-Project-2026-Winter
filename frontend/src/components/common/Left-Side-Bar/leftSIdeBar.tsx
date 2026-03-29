import "./leftSideBar.css";

type Movie = {
    id: number;
    title: string;
    rating: number;
    description: string;
};

function LeftSideBar(props: { movies: Movie[] }) {
    return (
        <div id="topFiveMovies">
            <h2>Top 5 Movies</h2>
            <ol>
                {props.movies.slice(0, 5).map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ol>
        </div>
    );
}

export default LeftSideBar;