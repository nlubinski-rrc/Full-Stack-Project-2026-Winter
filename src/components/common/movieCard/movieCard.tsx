import "./movieCard.css";

function MovieCard({ movie }: { movie: String[] }) {
    return (
        <div className="movieCard">
            <h3 className="cardTitle">{movie[0]}</h3>
            <div>Rating: {movie[1]}</div>
            <div>{movie[2]}</div>
        </div>
    );
}

export default MovieCard;
