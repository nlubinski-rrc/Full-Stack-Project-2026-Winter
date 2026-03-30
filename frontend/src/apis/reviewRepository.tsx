import type { reviewType } from "../types/reviewType";

const BASE_URL = "http://localhost:5000/api/v1/reviews";

type ApiResponse<T> = {
    status: string;
    data?: T;
    message?: string;
    error?: string;
    code?: string;
};

export async function fetchReviews(): Promise<reviewType[]> {
    const res = await fetch(BASE_URL);
    const json: ApiResponse<reviewType[]> = await res.json();
    return json.data ?? [];
}

export async function createReviewRepository(
    review: Omit<reviewType, "Id">
): Promise<reviewType> {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
    });

    const json: ApiResponse<reviewType> = await res.json();
    if (!json.data) {
        throw new Error("Failed to create review");
    }
    return json.data;
}

export async function deleteReview(reviewId: string) {
    await fetch(`${BASE_URL}/${reviewId}`, {
        method: "DELETE",
    });
}