import type { reviewType } from "../types/reviewType";
import reviewData from "../testData/reviewData";

type StoredReview = reviewType & {
    Id: string;
};

function ensureReviewId(review: reviewType): StoredReview {
    if (!review.Id) {
        throw new Error("Review Id is required");
    }

    return review as StoredReview;
}

export function fetchReviews(): reviewType[] {
    return [...reviewData];
}

export async function getReviewByReviewId(reviewId: string): Promise<reviewType> {
    const foundReview = reviewData.find((review) => review.Id === reviewId);

    if (!foundReview) {
        throw new Error(`Failed to fetch term with ${reviewId}`);
    }

    return foundReview;
}

export async function updateReview(review: reviewType) {
    const reviewWithId = ensureReviewId(review);

    const foundReviewIndex = reviewData.findIndex(
        (existingReview) => existingReview.Id === reviewWithId.Id
    );

    if (foundReviewIndex === -1) {
        throw new Error(`Failed to update term with ${reviewWithId.Id}`);
    }

    reviewData[foundReviewIndex] = reviewWithId;
    return reviewData[foundReviewIndex];
}

export async function deleteReview(reviewId: string) {
    const indexToDelete = reviewData.findIndex((review) => review.Id === reviewId);

    if (indexToDelete === -1) {
        throw new Error(`Failed to fetch id ${reviewId}`);
    }

    const removed = reviewData.splice(indexToDelete, 1)[0];
    return removed;
}

export async function createReviewRepository(review: reviewType) {
    const reviewWithId = ensureReviewId(review);
    reviewData.push(reviewWithId);
    return reviewWithId;
}