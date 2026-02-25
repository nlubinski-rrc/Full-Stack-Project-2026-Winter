import type { reviewType } from "../types/reviewType";
import reviewData from "../testData/reviewData";

export function fetchReviews(): reviewType[] {
    return reviewData;
};


export async function getReviewByReviewId(reviewId: string): Promise<reviewType> {
    const foundReview = reviewData.find(t => t.Id === reviewId);
    if(!foundReview) {
        throw new Error(`Failed to fetch term with ${reviewId}`);
    }

    return foundReview;
};

export async function updateService(review: reviewType) {
    const foundReview = reviewData.findIndex(t => t.Id === review.Id);
    if(foundReview === -1) {
        throw new Error(`Failed to update term with ${review.Id}`);
    }

    reviewData[foundReview] = review;
    return reviewData[foundReview];
};

export async function deleteReviewServices(reviewId: string) {
    const indexToDelete = reviewData.findIndex(t => t.Id === reviewId);

    if (indexToDelete === -1) {
        throw new Error(`Failed to fetch id ${reviewId}`);
    }
    const removed = reviewData.splice(indexToDelete, 1)[0];
    return removed;
};

export async function createReviewServices(review: reviewType) {
    reviewData.push(review);
    return review;
};
