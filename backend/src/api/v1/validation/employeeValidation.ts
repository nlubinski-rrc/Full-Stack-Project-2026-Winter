import Joi from "joi";

export const employeeSchemas = {
    createEmployeeSchema: {
        body: Joi.object({
            id: Joi.number().required().messages({
                "any.required": "id is required",
                "number.base": "id  should be a number"
            }),
            first_name: Joi.string().required().min(2).max(20).messages({
                "any.required": "First name is required",
                "string.empty": "First name be empty",
                "string.base": "First name should be a string",
                "string.min": "First name must be at least 2 characters",
                "string.max": "First name cannot exceed 20 characters"
            }),
            last_name: Joi.string().required().min(2).max(30).messages({
                "any.required": "last name is required",
                "string.empty": "last name be empty",
                "string.base": "last name should be a string",
                "string.min": "last name must be at least 2 characters",
                "string.max": "last name cannot exceed 20 characters"
            }),
            departmentId: Joi.number().required().messages({
                "any.required": "department id is required",
                "number.base": "department id  should be a number"
            })
        }),
    }
}