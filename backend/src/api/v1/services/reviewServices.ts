const COLLECTION: string = "Courses";
import { prisma } from "../../../../prisma/client"
import { reviewType } from "../types/reviewType";

export const createReview = async (reviewData: {
    Id: string,
    movieName: string,
    review: string,
    reviewOutOfTen: number
}): Promise<reviewType> => {
    const newReview: reviewType = await prisma.Review.create({
        data: {
            ...reviewData
        }
    });
    return newReview;
};

export const getAllReviews = async (): Promise<reviewType[]> => {
    return prisma.Reviews.findMany();
};

export const getReviewByReviewId = async (Id:string): Promise<reviewType | null> => {
    const review = prisma.Review.findUnique({
        where: {
            Id: Id,
        }})
    if(!review) {
        return null;
    } else{
        return review;
    }
};

export const updateReview = async (
    Id: string,
    reviewData: {review: string, reviewOutOfTen: number}
): Promise<reviewType> => {
    const updatedReview = await prisma.Review.update({
        where: {
            id: Id
        },
        data: {
            ...reviewData
        }});
    return updatedReview;
};

export const deleteReview = async (Id: string): Promise<void> => {
    await prisma.Review.delete({
        where: {
            id: Id
        }
    });
};