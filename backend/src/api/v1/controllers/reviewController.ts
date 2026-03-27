import type { reviewType } from "../types/reviewType";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { NextFunction, Request, Response} from "express";
import { successResponse, errorResponse } from "../../../models/responseModel";
import * as reviewServices from "../services/reviewServices";

export const createReview = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const {movieName, review, reviewOutOfTen } = req.body;
        console.log(movieName, review, reviewOutOfTen )
        const reviewItem: reviewType = await reviewServices.createReview({ movieName ,review, reviewOutOfTen });
        res.status(HTTP_STATUS.CREATED).json(
            successResponse(reviewItem, "Review created successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorResponse("Review couldn't be created")
        );
    }
}

// export const getReviewByReviewId = async (
//     req: Request,
//     res: Response,
//     _next: NextFunction
// ): Promise<void> => {
//     try {
//         const Id = Number(req.params.Id)
//         console.log(Id)
//         const reviewData:reviewType | null = await reviewServices.getReviewByReviewId(Id)
//         res.status(HTTP_STATUS.OK).json(
//             successReply(reviewData, "Review retrieved successfully")
//         );
//     } catch (error: unknown) {
//         const errorMessage = error instanceof Error ? error.message : String(error);
//             console.error(errorMessage);
//         res.status(HTTP_STATUS.BAD_REQUEST).json(
//             errorReply("Review wasnt retrieved")
//         );
//     }
// }

export const getAllReviews = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const reviewData: reviewType[] = await reviewServices.getAllReviews();
        res.status(HTTP_STATUS.OK).json(
            successResponse(reviewData,"Review list retrieved successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorResponse("Review list wasnt retrieved")
        );
    }
}

// export const updateReview = async (
//     req: Request,
//     res: Response,
//     _next: NextFunction
// ): Promise<void> => {
//     try {
//         const Id:number = Number(req.params.Id);
//         const {review, reviewOutOfTen} = req.body;
//         const updatedReviewInfo:reviewType = await reviewServices.updateReview( Id, {review, reviewOutOfTen});
//         res.status(HTTP_STATUS.OK).json(
//             successReply(updatedReviewInfo, "Review info updated successfully")
//         );
//     } catch (error: unknown) {
//         const errorMessage = error instanceof Error ? error.message : String(error);
//             console.error(errorMessage);
//         res.status(HTTP_STATUS.BAD_REQUEST).json(
//             errorReply("Review info couldnt be updated")
//         );
//     }
// }

export const deleteReview = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const review = Number(req.params.Id);
        await reviewServices.deleteReview(review);
        res.status(HTTP_STATUS.OK).json(
            successResponse(review, "Review info deleted successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorResponse("Review couldnt deleted")
        );
    }
}