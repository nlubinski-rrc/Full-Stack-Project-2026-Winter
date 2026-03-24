import type { reviewType } from "../types/reviewType";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { NextFunction, Request, Response} from "express";
import { successReply, errorReply } from "../../../models/responseModel";
import * as reviewServices from "../services/reviewServices";

export const createReview = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const {Id, movieName, review, reviewOutOfTen } = req.body;
        const reviewItem: reviewType = await reviewServices.createReview({ Id, movieName ,review, reviewOutOfTen });
        res.status(HTTP_STATUS.CREATED).json(
            successReply(reviewItem, "Review created successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Review couldn't be created")
        );
    }
}

export const getReviewByReviewId = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const Id:number = req.body.Id
        const reviewData:reviewType | null = await reviewServices.getReviewByReviewId(Id)
        res.status(HTTP_STATUS.OK).json(
            successReply(reviewData, "Review retrieved successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Review wasnt retrieved")
        );
    }
}

export const getAllReviews = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const reviewData: reviewType[] = await reviewServices.getAllReviews();
        res.status(HTTP_STATUS.OK).json(
            successReply(reviewData,"Review list retrieved successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Review list wasnt retrieved")
        );
    }
}

export const updateReview = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const Id:number = Number(req.params.Id);
        const { movieName, review, reviewOutOfTen} = req.body;
        const updatedReviewInfo:reviewType = await reviewServices.updateReview( Id, {movieName, review, reviewOutOfTen});
        res.status(HTTP_STATUS.OK).json(
            successReply(updatedReviewInfo, "Review info updated successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Review info couldnt be updated")
        );
    }
}

export const deleteReview = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const review = Number(req.params.Id);
        await reviewServices.deleteReview(review);
        res.status(HTTP_STATUS.OK).json(
            successReply(review, "Review info deleted successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Review couldnt deleted")
        );
    }
}