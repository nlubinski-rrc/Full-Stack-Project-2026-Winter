import { Request, Response, NextFunction } from "express";
import { DecodedIdToken } from "firebase-admin/auth";
import { AuthenticationError } from "../errors/errorCollection";
import { getErrorMessage, getErrorCode } from "../utils/errorUtils";
import { auth } from "../../../../config/firebaseConfig";

/**
 * Responsable for handling and ensuring a token is provided and correct.
 * @param req - The express Request.
 * @param res  - The express Response.
 * @param next - The express middleware chaining function.
 */
const authenticate = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const grabTokenHeader: string | undefined = req.headers.authorization;
        const token: string | undefined = grabTokenHeader?.startsWith("Bearer ")
            ? grabTokenHeader.split(" ")[1]
            : undefined;

        if (!token) {
            throw new AuthenticationError(
                "unauthorized: No token provided", 
                "TOKEN_NOT_FOUND"
            );
        }
        const decodedToken: DecodedIdToken = await auth.verifyIdToken(token);
        res.locals.uid = decodedToken.uid;
        res.locals.role = decodedToken.roles;
        next();
    }catch (error: unknown) {
        // if error is one that was created in the error/errorCollection.
        if (error instanceof AuthenticationError) {
            next(error);
        // if the error is a known error.
        } else if (error instanceof Error) {
            next(
                new AuthenticationError(
                    `unauthorized: ${getErrorMessage(error)}`, 
                    getErrorCode(error)
                )
            );
        // if the error is a unknown error.
        } else {
            next(
                new AuthenticationError(
                    `unauthorized: Invalid token`, 
                    "TOKEN_INVALID"
                )
            );
        }
    }
};

export default authenticate;