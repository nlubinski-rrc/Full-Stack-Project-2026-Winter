import { useEffect, useState } from "react";
import * as reviewService from "../services/reviewServices";
import type { reviewType } from "../types/reviewType";

export function useReviews() {
    const [reviewsList, setReviews] = useState<reviewType[]>([]);

    useEffect(() => {
        async function loadReviews() {
            try {
                const data = await reviewService.fetchReviews();
                setReviews(data);
            } catch (error) {
                console.error("Failed to load reviews:", error);
                setReviews([]);
            }
        }

        loadReviews();
    }, []);

    async function addReview(newReview: Omit<reviewType, "Id">) {
        const created = await reviewService.addReview(newReview);
        setReviews((prev) => [...prev, created]);
    }

    async function deleteReview(reviewId: string) {
        await reviewService.deleteReview(reviewId);
        setReviews((prev) => prev.filter((review) => review.Id !== reviewId));
    }

    return { reviewsList, addReview, deleteReview };
}