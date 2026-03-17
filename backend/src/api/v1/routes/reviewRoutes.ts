import * as reviewController from "../controllers/reviewController";
import { reviewSchema } from "../validation/courseValidation";
import express, { Router } from "express";
const router: Router = express.Router();

router.post("/",
    validateRequest(reviewSchemas.createReview),
    reviewController.createReview);

router.get("/", reviewController.getAllReviews);

router.get("/:reviewId",
    validateRequest(reviewSchemas.findreview),
    reviewController.getReviewByReviewId);

router.delete("/:reviewId",
    validateRequest(reviewSchemas.deleteReview),
    reviewController.deleteReview);

router.put("/:reviewId",
    validateRequest(reviewSchemas.updateReview),
    reviewController.updateReview);
export default router;