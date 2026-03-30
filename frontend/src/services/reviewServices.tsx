import * as reviewRepository from "../apis/reviewRepository";
import type { reviewType } from "../types/reviewType";

export async function fetchReviews() {
    return reviewRepository.fetchReviews();
}

export async function addReview(review: Omit<reviewType, "Id">) {
    return reviewRepository.createReviewRepository(review);
}

export async function deleteReview(reviewId: string) {
    return reviewRepository.deleteReview(reviewId);
}