import { reviewType } from "../types/reviewType";

let reviewsData: reviewType[] = [];

export const createReview = async (reviewData: {
    movieName: string,
    review: string,
    reviewOutOfTen: number
}): Promise<reviewType> => {
    const newReview: reviewType = {
        Id: reviewsData.length + 1,
        movieName: reviewData.movieName,
        review: reviewData.review,
        reviewOutOfTen: reviewData.reviewOutOfTen
    };

    reviewsData.push(newReview);
    return newReview;
};

export const getAllReviews = async (): Promise<reviewType[]> => {
    return reviewsData;
};

export const getReviewByReviewId = async (Id: number): Promise<reviewType | null> => {
    const review = reviewsData.find((review) => review.Id === Id);
    return review || null;
};

export const updateReview = async (
    Id: number,
    reviewData: { review: string; reviewOutOfTen: number; }
): Promise<reviewType> => {
    const reviewIndex = reviewsData.findIndex((review) => review.Id === Id);

    if (reviewIndex === -1) {
        throw new Error("Review not found");
    }

    reviewsData[reviewIndex] = {
        ...reviewsData[reviewIndex],
        review: reviewData.review,
        reviewOutOfTen: reviewData.reviewOutOfTen
    };

    return reviewsData[reviewIndex];
};

export const deleteReview = async (Id: number): Promise<void> => {
    reviewsData = reviewsData.filter((review) => review.Id !== Id);
};