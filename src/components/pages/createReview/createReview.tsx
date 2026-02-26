import { useState } from "react";
import "./createReview.css";
import type { Watchlist } from "../../../types/watchlistType";
import MovieCard from "../../common/movieCard/movieCard";
import movieData from "../../../../testMovieData.json";
import type { reviewType } from "../../../types/reviewType";
import { useReviews } from "../../../hooks/useReviews";

type CreateReviewProps = {
    watchlist: Watchlist;
    setWatchlist: React.Dispatch<React.SetStateAction<Watchlist>>;
};
export function CreateReview({ watchlist, setWatchlist }: CreateReviewProps) {
    const [text, textSave] = useState("");
    const [error, setError] = useState("");
    const [selectedMovieId, setSelectedMovieId] = useState<string>("");
    const [reviewOutOfTen, setReviewOutOfTen] = useState(0)
    const { reviewsList , addReview, deleteReview} = useReviews();
    const availableMovies = movieData.results.filter(movie =>
        watchlist.watchlistItems.some(item => item.movieId === movie.id)
    );
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        textSave(e.target.value);
        if (error) {
            setError("");
        }
    }
    const movieIds = watchlist.watchlistItems.map((movie) =>movie.movieId);
    const movieList = movieData["results"].map((movie) => {
            if (movieIds.includes(movie.id)) {
                return (
                    <MovieCard
                        key={movie.id}
                        movie={[movie.title, movie.vote_average.toString()]}
                    />
                );
            }
        });
    function saveText() {
        if (text.length < 30) {
            setError("review has to be longer than 30 characters")
            return
        }
        if (!selectedMovieId) {
            setError("Please select a movie.");
            return;
        }
        const newReview: reviewType = {
            Id: crypto.randomUUID(),
            movieName: selectedMovieId,
            review: text,
            reviewOutOfTen: reviewOutOfTen
        };
        addReview(newReview);
    };
    function checkMovieList() {
        setWatchlist(prev => ({
            ...prev,
            watchlistItems: prev.watchlistItems.filter(movie =>
                !selectedMovieId.includes(movie.movieTitle)
            )
        })
        
    );
    }
    return(
        <div id="reviewform">
            <div id="createReviewStage">
                <label htmlFor="DropDownForMovies" >Select a movie:</label>
                <select id="DropDownForMovies" value={selectedMovieId} onChange={e => setSelectedMovieId(e.target.value)}>
                    <option value="SelectedMovie">Select a movie</option>
                    {availableMovies.map(movie => (
                        <option key={movie.title} value={movie.title}>
                            {movie.title}
                        </option>
                    ))}
                </select>
                <label htmlFor="DropDownRatingOfTen">Select review out of ten:</label>
                <select id="DropDownRatingOfTen" value={Number(reviewOutOfTen)} onChange={e => setReviewOutOfTen(Number(e.target.value))}>
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
                <textarea id="createTheReview" value={text} onChange={handleChange} style={{width: '300px', height: '50px'}}>--Review message--</textarea>
                <button onClick={() => {saveText();checkMovieList();}}>
                    Submit review
                </button>
            </div>
            <div id="reviewStage">
                <h2>Recent reviews:</h2>
                <form action="submit" name="CreateReviewForm">
                </form>
                <ol>
                {reviewsList.map(review => (
                    <li key={review.Id}>
                        {review.movieName} - {review.reviewOutOfTen}/10 - {review.review}
                        <button onClick={() => deleteReview(review.Id)}>
                            Delete
                        </button>
                    </li>
                ))}
                </ol>
                <p>{error}</p>
            </div>
            <h2>Watchlist:</h2>
            <div>
            <h3>Movies you can review:</h3>
            <h3 id="movieList">{movieList}</h3>
            </div>
        </div>
    )
}
