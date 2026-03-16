import { Review } from "../../../models/reviewModel";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { Request, Response, NextFunction} from "express";
import { successReply, errorReply } from "../../../models/responseModel";
import * as reviewServices from "../services/reviewServices";
import { EmailFormat } from "../../../models/nodeMailerModel";
import sendEmail from "../middleware/nodeMailer";

/**
 * Responsible for creating a review
 * @param req - The request object.
 * @param res - The response object.
 * @param _next - The express middleware chaining function
 */
export const createReview = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const { firstName, lastName, studentNumber, reviewOutOfTen, comments } = req.body;
        const reviewItem: Review = await reviewServices.createReview({ firstName, lastName, studentNumber, reviewOutOfTen, comments});
        const email:EmailFormat = {
            to: process.env.EMAIL_RECIEVER,
            subject: "Creation of review",
            text: `A review has been created ${reviewItem.reviewId}`
        }
        await sendEmail(email);
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

/**
 * Responsible for grabbing a review by its review id
 * @param req - The request object.
 * @param res - The response object.
 * @param _next - The express middleware chaining function
 */
export const getReviewByReviewId = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const id:string = req.body.reviewId
        const reviewData:Review = await reviewServices.getReviewByReviewId(id)
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

/**
 * Responsible for grabbing all reviews
 * @param req - The request object.
 * @param res - The response object.
 * @param _next - The express middleware chaining function
 */
export const getAllReviews = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const reviewData: Review[] = await reviewServices.getAllReviews();
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

/**
 * Responsible for updating a review
 * @param req - The request object.
 * @param res - The response object.
 * @param _next - The express middleware chaining function
 */
export const updateReview = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const review:string = req.params.reviewId;
        const { reviewOutOfTen, comments } = req.body;
        const updatedReview: Review = await reviewServices.updateReview( review, { reviewOutOfTen, comments});
        res.status(HTTP_STATUS.OK).json(
            successReply(updatedReview, "Review info updated successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Review info couldnt be updated")
        );
    }
}

/**
 * Responsible for deleting a review
 * @param req - The request object.
 * @param res - The response object.
 * @param _next - The express middleware chaining function
 */
export const deleteReview = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const reviewData:string = req.params.reviewId;
        await reviewServices.deleteReview(reviewData);
        const email:EmailFormat = {
            to: process.env.EMAIL_RECIEVER,
            subject: "Deletion of a review",
            text: `A review has been deleted with the reviewID:${reviewData}`
        }
        await sendEmail(email);
        res.status(HTTP_STATUS.OK).json(
            successReply(reviewData, "Review deleted successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Review couldnt deleted")
        );
    }
}