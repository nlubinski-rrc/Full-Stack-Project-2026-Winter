import "./topReviewers.css"
import samplePoster from "../../../assets/temporary/sample-poster.jpg"

/** Remove when backend can handle populating list */
const reviewers = [
    {
        name: "John Doe",
        reviewsThisWeek: 6
    },
    {
        name: "Nick Martens",
        reviewsThisWeek: 10
    },
    {
        name: "Nolan Lubinski",
        reviewsThisWeek: 5
    },
    {
        name: "Dylan Kaspick",
        reviewsThisWeek: 15
    },
    {
        name: "Jane Doe",
        reviewsThisWeek: 3
    }
]

function TopReviewersSideBar() {
    return (
        <div className="topReviewers">
            <h1>Top Reviewers</h1>
            <ul id="topReviewersList"> 
                {/*Inject top reviewers here*/}

                <li>{reviewers[0].name} - Reviews This Week: {reviewers[0].reviewsThisWeek} 
                    <div className="reviewedMovies">
                        <img width="50" src={samplePoster} alt="" />
                        <img width="50" src={samplePoster} alt="" />
                        <img width="50" src={samplePoster} alt="" />
                        <img width="50" src={samplePoster} alt="" />
                        <img width="50" src={samplePoster} alt="" />
                    </div>
                </li>
                <li>{reviewers[1].name} - Reviews This Week: {reviewers[1].reviewsThisWeek} 
                    <div className="reviewedMovies">
                        <img width="50" src={samplePoster} alt="" />
                        <img width="50" src={samplePoster} alt="" />
                        <img width="50" src={samplePoster} alt="" />
                    </div>
                </li>
                <li>{reviewers[2].name} - Reviews This Week: {reviewers[2].reviewsThisWeek} 
                    <div className="reviewedMovies">
                        <img width="50" src={samplePoster} alt="" />
                        <img width="50" src={samplePoster} alt="" />
                        <img width="50" src={samplePoster} alt="" />
                        <img width="50" src={samplePoster} alt="" />
                    </div>
                </li>
                <li>{reviewers[3].name} - Reviews This Week: {reviewers[3].reviewsThisWeek} 
                    <div className="reviewedMovies">
                        <img width="50" src={samplePoster} alt="" />
                        <img width="50" src={samplePoster} alt="" />
                    </div>
                </li>
                <li>{reviewers[4].name} - Reviews This Week: {reviewers[4].reviewsThisWeek} 
                    <div className="reviewedMovies">
                        <img width="50" src={samplePoster} alt="" />
                        <img width="50" src={samplePoster} alt="" />
                        <img width="50" src={samplePoster} alt="" />
                        <img width="50" src={samplePoster} alt="" />
                        <img width="50" src={samplePoster} alt="" />
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default TopReviewersSideBar