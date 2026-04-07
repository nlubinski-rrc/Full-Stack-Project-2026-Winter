import { useState } from "react";
import "./createReview.css";
import MovieCard from "../../common/movieCard/movieCard";
import { useReviews } from "../../../hooks/useReviews";
import { useWatchlist } from "../../../hooks/useWatchlist";
import { useMovies } from "../../../hooks/movieHook";

export function CreateReview() {
    const { watchlist, removeFromWatchlist } = useWatchlist([]);
    const { movies } = useMovies([]);
    const [text, textSave] = useState("");
    const [error, setError] = useState("");
    const [selectedMovieId, setSelectedMovieId] = useState<string>("");
    const [reviewOutOfTen, setReviewOutOfTen] = useState(0);

    const { reviewsList, addReview, deleteReview } = useReviews();

    const availableMovies = movies.filter((movie) =>
        watchlist.some((item) => item.id === movie.id)
    );

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        textSave(e.target.value);
        if (error) {
            setError("");
        }
    }

    const movieIds = watchlist.map((movie) => movie.id);

    const movieList = movies.map((movie) => {
        if (movieIds.includes(movie.id)) {
            return (
                <MovieCard key={movie.id} movie={[movie.title, movie.averageRating.toString()]} />
            );
        }
    });

    function saveText() {
        if (!selectedMovieId) {
            setError("Please select a movie.");
            return false;
        }

        if (text.length < 30) {
            setError("review has to be longer than 30 characters");
            return false;
        }

        const newReview = {
            movieName: selectedMovieId,
            review: text,
            reviewOutOfTen: reviewOutOfTen,
        };

        addReview(newReview);
        return true;
    }

    function checkMovieList() {
        const watchlistCheck = watchlist.filter((movie) => movie.id === parseInt(selectedMovieId));
        if (watchlistCheck) {
            removeFromWatchlist(parseInt(selectedMovieId));
        }
    }

    return (
        <div id="reviewform">
            <div id="createReviewStage">
                <label htmlFor="DropDownForMovies">Select a movie:</label>

                <select
                    id="DropDownForMovies"
                    value={selectedMovieId}
                    onChange={(e) => setSelectedMovieId(e.target.value)}
                >
                    {}
                    <option value="">Select a movie</option>

                    {availableMovies.map((movie) => (
                        <option key={movie.id} value={movie.id}>
                            {movie.title}
                        </option>
                    ))}
                </select>

                <label htmlFor="DropDownRatingOfTen">Select review out of ten:</label>

                <select
                    id="DropDownRatingOfTen"
                    value={Number(reviewOutOfTen)}
                    onChange={(e) => setReviewOutOfTen(Number(e.target.value))}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>

                <label htmlFor="createTheReview">Leave a review here:</label>

                <textarea
                    id="createTheReview"
                    value={text}
                    onChange={handleChange}
                    style={{ width: "300px", height: "50px" }}
                >
                    --Review message--
                </textarea>

                <button
                    onClick={() => {
                        if (saveText()) {
                            checkMovieList();
                        }
                    }}
                >
                    Submit review
                </button>

                {}
                <p>{error}</p>
            </div>

            <div id="reviewStage">
                <h2>Recent reviews:</h2>

                <ol>
                    {reviewsList.map((review) => (
                        <li key={review.Id}>
                            {review.movieName} - {review.reviewOutOfTen}/10 - {review.review}
                            <button onClick={() => review.Id && deleteReview(review.Id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ol>
            </div>

            <h2>Watchlist:</h2>
            <div>
                <h3>Movies you can review:</h3>
                <h3 id="movieList">{movieList}</h3>
            </div>
        </div>
    );
}
