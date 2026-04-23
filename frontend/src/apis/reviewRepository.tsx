import type { reviewType } from "../types/reviewType";
const BASE_URL = "http://localhost:3000";
const REVIEWS_ENDPOINT = "/api/v1/reviews";

type BackendReview = {
    Id: number;
    movieName: string,
    review: string,
    reviewOutOfTen: number
};

type ApiResponse<T> = {
    data: T;
    message: string;
};

function mapBackendReview(review: BackendReview): reviewType {
    return {
        Id: review.Id,
        movieName: review.movieName,
        review: review.review,
        reviewOutOfTen: review.reviewOutOfTen
    };
}

export async function fetchReviews(): Promise<reviewType[]> {
    const res = await fetch(`${BASE_URL}${REVIEWS_ENDPOINT}`);
    if (!res.ok) {
        throw new Error("Failed to fetch movies");
    }

    const json: ApiResponse<reviewType[]> = await res.json();
    console.log(json);
    return json.data.map(mapBackendReview);
};


export async function getReviewByReviewId(reviewId: number): Promise<reviewType> {
    const res = await fetch(`${BASE_URL}${REVIEWS_ENDPOINT}/${reviewId}`);

    if (!res.ok) {
        throw new Error(`Could not find review Id ${reviewId}`);
    }

    const review: ApiResponse<reviewType> = await res.json();
    return mapBackendReview(review.data);
};

// export async function updateReview(review: reviewType): Promise<reviewType> {
//     const foundReview = reviewData.findIndex(review => review.Id === review.Id);
//     if(foundReview === -1) {
//         throw new Error(`Failed to update term with ${review.Id}`);
//     }

//     reviewData[foundReview] = review;
//     return reviewData[foundReview];
// };

export async function createReviewRepository(review: Omit<reviewType, "Id">): Promise<reviewType> {
    const res = await fetch(`${BASE_URL}${REVIEWS_ENDPOINT}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
    });

    if (!res.ok) {
        throw new Error("Failed to create review");
    }

    const data = await res.json();
    return data;
}

export async function deleteReview(reviewId: number): Promise<void> {
    const res = await fetch(`${BASE_URL}${REVIEWS_ENDPOINT}/${reviewId}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        throw new Error(`Failed to delete review with id ${reviewId}`);
    }
}