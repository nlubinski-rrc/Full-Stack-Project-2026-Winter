import type { reviewType } from "../types/reviewType";
import reviewData from "../testData/reviewData";

export function fetchReviews(): reviewType[] {
    return [...reviewData];
};


export async function getReviewByReviewId(reviewId: string): Promise<reviewType> {
    const foundReview = reviewData.find(review => review.Id === reviewId);
    if(!foundReview) {
        throw new Error(`Failed to fetch term with ${reviewId}`);
    }

    return foundReview;
};

export async function updateReview(review: reviewType): Promise<reviewType> {
    const foundReview = reviewData.findIndex(review => review.Id === review.Id);
    if(foundReview === -1) {
        throw new Error(`Failed to update term with ${review.Id}`);
    }

    reviewData[foundReview] = review;
    return reviewData[foundReview];
};

export async function deleteReview(reviewId: string) {
    const indexToDelete = reviewData.findIndex(review => review.Id === reviewId);

    if (indexToDelete === -1) {
        throw new Error(`Failed to fetch id ${reviewId}`);
    }
    const removed = reviewData.splice(indexToDelete, 1)[0];
    return removed;
};

export async function createReviewRepository(review: reviewType) {
    reviewData.push(review);
    return review;
};
