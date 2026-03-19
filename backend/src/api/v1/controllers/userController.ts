import { Request, Response, NextFunction } from "express";
import { UserRecord } from "firebase-admin/auth";
import { auth } from "../../../../config/firebaseConfig";
import { successReply } from "../../../models/responseModel";
import { HTTP_STATUS } from "../../../constants/httpConstants";

/**
 * Gets user details.
 * @param req - The express Request.
 * @param res  - The express Response.
 * @param next - The express middleware chaining function.
 */
export const getUserDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { id } = req.params;

        const userRecord: UserRecord = await auth.getUser(id);
        res.status(HTTP_STATUS.OK).json(successReply(userRecord));
    } catch (error: unknown) {
        next(error);
    }
};
