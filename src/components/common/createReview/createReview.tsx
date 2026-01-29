import { useState } from "react"
import "./createReview.css"
export function CreateReview() {
    const [text, textSave] = useState("")
    const [error, setError] = useState("")
    const [reviews, setReviews] = useState<string[]>([]);
    const [deleteText, setDeleteText] = useState("")

    function handleChange(e) {
        textSave(e.target.value)
        if (error) setError("")
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
            console.log(index)
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
        <div id="form">
            <h3>Please be sure to include your movie title</h3>
            <textarea value={text} onChange={handleChange} style={{width: '300px', height: '50px'}}>Review message</textarea>
            <button onClick={saveText}>
                Submit
            </button>
            <div id="reviewStage">
                <h2>Recent reviews:</h2>
                <input id="numberInput"type="number" value={deleteText} onChange={handleChangeDeleteText} placeholder="Select which review to delete"/>
                <button onClick={() => removeReview(Number(deleteText) - 1)}>
                    Submit
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