import { useState } from "react";
import "./createReview.css";
export function CreateReview() {
    const [text, textSave] = useState("");
    const [error, setError] = useState("");
    const [reviews, setReviews] = useState<string[]>([]);
    const [deleteText, setDeleteText] = useState("");

    function handleChange(e) {
        textSave(e.target.value)
        if (error) {
            setError("")
        }
    }
    function handleChangeDeleteText(e) {
        setDeleteText(e.target.value)
    }
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
            return prevItems; // IMPORTANT
            }
            const newItems = [...prevItems];
            newItems.splice(index, 1);
            setError("");
            return newItems;
            });
    }
    return(
        <div id="reviewform">
            <h2>leave a review and please be sure to include your movie title</h2>
            <textarea value={text} onChange={handleChange} style={{width: '300px', height: '50px'}}>Review message</textarea>
            <button onClick={saveText}>
                Submit review
            </button>
            <div id="reviewStage">
                <h2>Recent reviews:</h2>
                <form action="submit">
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
        </div>
    )
}