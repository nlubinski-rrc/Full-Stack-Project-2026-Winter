import * as reviewController from "../controllers/reviewController";
import { reviewSchemas } from "../validation/reviewValidation";
import express, { Router } from "express";
import { validateRequest } from "../middleware/validation";
const router: Router = express.Router();

router.post("/",
    validateRequest(reviewSchemas.createReviewSchema),
    reviewController.createReview);

router.get("/", reviewController.getAllReviews);

// router.get("/:Id",
//     validateRequest(reviewSchemas.findReview),
//     reviewController.getReviewByReviewId);

router.delete("/:Id",
    validateRequest(reviewSchemas.deleteReview),
    reviewController.deleteReview);

// router.put("/:Id",
//     validateRequest(reviewSchemas.updateReview),
//     reviewController.updateReview);
export default router;