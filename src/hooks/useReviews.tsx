import { useState } from "react";
import * as reviewService from "../services/reviewServices"
import type { reviewType } from "../types/reviewType"
/**
 * useReviews is a custom hook that gives access to reviews and the ability 
 * to add a review and delete it
 * @returns 
 * reviewList - the list of reviews
 * addReview - is the function to create Reviews within the databse we have currently
 * deleteReview - is the function to delete reviews
 * 
 */
export function useReviews() {
    const [reviewsList, setReviews] = useState<reviewType[]>(
        reviewService.fetchReviews()
    );

    function addReview(newReview: reviewType) {
        reviewService.createReviewServices(newReview)
    }
    function deleteReview(reviewId: string) {
        setReviews(prev =>
            prev.filter(review => review.Id !== reviewId)
        );
        reviewService.deleteReviewServices(reviewId)
    }

    return { reviewsList, addReview, deleteReview };
}