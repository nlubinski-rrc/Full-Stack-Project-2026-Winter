import Joi from "joi";

export const reviewSchemas = {
    createReviewSchema: {
        body: Joi.object({
            movieName: Joi.string().required().messages({
                "any.required": "Movie name is required",
                "string.empty": "Movie name should be a string"
            }),
            review:Joi.string().required().messages({
                "any.required": "review is required",
                "string.empty": "review should be a string"
            }),
            reviewOutOfTen: Joi.number().min(0).max(10).required().messages({
                "any.required": "review out of ten is required",
                "number.base": "review out of ten should be a number",
                "number.min": "review out of ten should be higher than 0",
                "number.max": "review out of ten should be lower than 10"
            })
        })
    },
    findReview: {
        body: Joi.object({
            Id: Joi.string().required().messages({
                "any.required": "Id is required",
                "string.empty": "Id should not be empty",
                "string.base": "Id should be a string"
            })
        })
    },
    deleteReview: {
        body: Joi.object({
            Id: Joi.string().required().messages({
                "any.required": "Id is required",
                "string.empty": "Id should not be empty",
                "string.base": "Id should be a string"
            })
        })
    },
    updateReview: {
        body: Joi.object({
            review: Joi.string().min(30).required().messages({
                "any.required": "Id is required",
                "string.empty": "Id should not be empty",
                "string.base": "Id should be a string"
            }),
            reviewOutOfTen: Joi.number().min(0).max(10).required().messages({
                "any.required": "review out of ten is required",
                "number.base": "review out of ten should be a number",
                "number.min": "review out of ten should be higher than 0",
                "number.max": "review out of ten should be lower than 10"
            })
        })
    }
}