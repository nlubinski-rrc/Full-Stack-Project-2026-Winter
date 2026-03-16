import {
    QuerySnapshot,
    DocumentData,
    DocumentSnapshot,
} from "firebase-admin/firestore";
import { Review } from "src/models/reviewModel";
import {
    createDocument,
    getDocuments,
    getDocumentById,
    updateDocument,
    deleteDocument,
} from "../repository/firestoreRepository";

const COLLECTION: string = "Reviews";

/**
 * Responsible for creating a reiview
 * @param reviewItem An item of the info provided to create the review
 * @returns A clone of the review you created
 */
export const createReview = async (reviewItem: {
    firstName?: string,
    lastName?: string,
    studentNumber: string,
    reviewId?: string,
    reviewOutOfTen: number,
    comments?: string
}): Promise<Review> => {
    const newReview: Partial<Review> = {
        ...reviewItem
    };

    const review: string = await createDocument<Review>(COLLECTION, newReview);
    return structuredClone({ reviewId: review, ...newReview } as Review);
};

/**
 * Res[onsible for grabbing all the reviews
 * @returns An array of all the reviews
 */
export const getAllReviews = async (): Promise<Review[]> => {
    const snapshot: QuerySnapshot = await getDocuments(COLLECTION);
    const reviewData: Review[] = snapshot.docs.map((doc) => {
        const review: DocumentData = doc.data();
        return {
            reviewId: doc.id,
            ...review,
        } as Review;
    });

    return reviewData;
};

/**
 * Responible for getting a review by an id
 * @param reviewId The id of the review you want to retrieve
 * @returns The review with the id you want
 */
export const getReviewByReviewId = async (reviewId:string): Promise<Review> => {
    const doc: DocumentSnapshot | null = await getDocumentById(
        COLLECTION,
        reviewId
    );

    if (!doc) {
        throw new Error(`Review with ID ${reviewId} not found`);
    }

    const reviewData: DocumentData | undefined = doc.data();
    const newReview: Review = {
        reviewId: doc.id,
        ...reviewData,
    } as Review;

    return structuredClone(newReview);
};

/**
 * Responsible for updating a review
 * @param reviewId The id of the review you want to update
 * @param reviewData What you want to edit in the re-existing review
 * @returns The updated review
 */
export const updateReview = async (
    reviewId: string,
    reviewData: Pick<Review, "reviewOutOfTen" | "comments">
): Promise<Review> => {
    const reviewToUpdate: Review = await getReviewByReviewId(reviewId);
    if (!reviewToUpdate) {
        throw new Error(`Review with ID ${reviewId} not found`);
    }

    const updatedReview: Review = {
        ...reviewToUpdate
    };
    if (reviewData.reviewOutOfTen !== undefined)
        updatedReview.reviewOutOfTen = reviewData.reviewOutOfTen;
    if (reviewData.comments !== undefined)
        updatedReview.comments = reviewData.comments;

    await updateDocument<Review>(COLLECTION, reviewId, updatedReview);

    return structuredClone(updatedReview);
};

/**
 * Responible for deleting reviews
 * @param reviewId The id you want to delete
 */
export const deleteReview = async (reviewId: string): Promise<void> => {
    const reviewToDelete: Review = await getReviewByReviewId(reviewId);
    if (!reviewToDelete) {
        throw new Error(`Review with ID ${reviewId} not found`);
    }

    await deleteDocument(COLLECTION, reviewId);
};