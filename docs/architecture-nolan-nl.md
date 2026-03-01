# Architectural Layout
## useReviews():
Doest take any arguments but supplies two functions that can be used to add/delete reviews as well as retrieve all reviews as a default state.

### addReview:
Args:
    - newReview: The new review which needs to be the object of a review ref: "src/types/reviewType.

- This allows the creation of a review to be added to the database(Currently a stand in database) by the hook interacting with the service layer.

### deleteReview:
Args:
    - reviewId: The review of the id that is to be deleted.

- This function allows the deletion of a review in the database by the function in the hook interacting with the service layer.

- These functions are used anywhere you need reviews or anywhere you need to add or delete a review.

## Reviews services
### Exports:
- deleteReview()
- addReview()
- fetchReviews()

These functions fetch data add reviews and delete reviews from the repo. No validation currently implemented.

## Reviews Repository
### Exports:
- fetchReviews() Returns the reviews in a array.
- getReviewByReviewId(reviewId) fetches a review by its id.
- updateReviewService(review) updates a rview by using its id.
- deleteReviewServices(reviewId) deltes a review by its id.
- createReviewServices(review) creates a review with a reviewType.

All database actions are done through the repository layer and the services shouldnt directly touch the database.