import { useState } from "react";
import "./createReview.css";
import type { Watchlist } from "../../../assets/types/watchlistType";
import MovieCard from "../../common/movieCard/movieCard";
import movieData from "../../../../testMovieData.json";

type CreateReviewProps = {
    watchlist: Watchlist;
    setWatchlist: React.Dispatch<React.SetStateAction<Watchlist>>;
};
export function CreateReview({ watchlist, setWatchlist }: CreateReviewProps) {
    const [text, textSave] = useState("");
    const [error, setError] = useState("");
    const [reviews, setReviews] = useState<string[]>([]);
    const [deleteText, setDeleteText] = useState("");
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        textSave(e.target.value);
        if (error) {
            setError("");
        }
    }

    function handleChangeDeleteText(e: React.ChangeEvent<HTMLInputElement>) {
        setDeleteText(e.target.value);
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
        setReviews(prev => [...prev, text]);
    };
    function removeReview(index: number) {
        setReviews( prevItems => { 
            Number(index)
            if (index <= -1 || index >= prevItems.length) {
                setError("Review you're trying to delete doesn't exist");
                return prevItems;
            }
            const newItems = [...prevItems];
            newItems.splice(index, 1);
            setError("");
            return newItems;
        });
    }
    function checkMovieList() {
        setWatchlist(prev => ({
            ...prev,
            watchlistItems: prev.watchlistItems.filter(movie =>
                !text.includes(movie.movieTitle)
            )
        })
    );
    }
    return(
        <div id="reviewform">
            <h2>leave a review and please be sure to include your movie title</h2>
            <textarea value={text} onChange={handleChange} style={{width: '300px', height: '50px'}}>Review message</textarea>
            <button onClick={() => {saveText();checkMovieList();}}>
                Submit review
            </button>
            <div id="reviewStage">
                <h2>Recent reviews:</h2>
                <form action="submit" name="CreateReviewForm">
                    <label>Review to delete:</label>
                    <input id="numberInput" type="number" value={deleteText} onChange={handleChangeDeleteText} placeholder="Select which review to delete"/>
                </form>
                <button onClick={() => removeReview(Number(deleteText) - 1)}>
                    Remove Review
                </button>
                <ol>
                    {reviews.map((review, index) => (
                        <li key={index}>{review}</li>
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