import { prisma } from "../../../../prisma/client"
//import { reviewType } from "../types/reviewType";
import { Review } from "../../../../generated/prisma/client";

export const createReview = async (reviewData: {
    movieName: string,
    review: string,
    reviewOutOfTen: number
}): Promise<Review> => {
    return await prisma.review.create({
        data: {
            review: reviewData.review,
            reviewOutOfTen: reviewData.reviewOutOfTen,
            movieName: reviewData.movieName
        },
    });
};

export const getAllReviews = async (): Promise<Review[]> => {
    return prisma.review.findMany();
};

// export const getReviewByReviewId = async (Id:number): Promise<reviewType | null> => {
//     const review = prisma.review.findUnique({
//         where: {
//             Id: Id,
//         }})
//     console.log(review)
//     if(!review) {
//         return null;
//     } else{
//         return review;
//     }
// };

// export const updateReview = async (
//     Id: number,
//     reviewData: { review: string; reviewOutOfTen: number;}
// ): Promise<reviewType> => {
//     const updatedReview: reviewType = await prisma.review.update({
//         where: {
//             Id: Id,
//         },
//         data: {
//             review: reviewData.review,
//             reviewOutOfTen: reviewData.reviewOutOfTen,
//         },
//     });
//     return updatedReview;
// };

export const deleteReview = async (Id: number): Promise<void> => {
    await prisma.review.delete({
        where: {
            Id: Id
        }
    });
};