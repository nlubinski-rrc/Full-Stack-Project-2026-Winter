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

    async function addReview(newReview: reviewType) {
        const created = await reviewService.addReview(newReview);

        setReviews(prev => [...prev, created]);
    }

    async function deleteReview(reviewId: string) {
        await reviewService.deleteReview(reviewId);

        setReviews(prev =>
            prev.filter(review => review.Id !== reviewId)
        );
    }

    return { reviewsList, addReview, deleteReview };
}