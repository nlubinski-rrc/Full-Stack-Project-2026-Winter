import { HTTP_STATUS } from "../../../constants/httpConstants";
import { NextFunction, Request, Response} from "express";
import { successReply, errorReply } from "../../../models/responseModel";
import { Employee } from "src/models/employeeModel";
import * as employeeService from "../services/employeeService";

export const getAllEmployees = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const employeeData = await employeeService.getAllEmployees();
        res.status(HTTP_STATUS.OK).json(
            successReply(employeeData, "Employees retrieved successfully")
        );
    } catch (error: unknown) {
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Error in retrieving employees")
        );
    }
}

export const createEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const {firstName, lastName, departmentId} = req.body;
        const employeeItem = await employeeService.createEmployee({firstName, lastName, departmentId});
        res.status(HTTP_STATUS.CREATED).json(
            successReply(employeeItem, "Employee successfully created")
        );
    } catch (error: unknown) {
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Employee couldn't be created")
        );
    }
}