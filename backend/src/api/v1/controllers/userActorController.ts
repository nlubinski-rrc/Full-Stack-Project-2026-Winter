import { Request, Response, NextFunction } from "express";
import * as userActorService from "../services/userActorsServices";
import { successResponse, errorResponse } from "../../../models/responseModel";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { UserActor } from "../../../../generated/prisma/client"

export const createUserActor = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        if (req.userId) {
            const newUserActor: UserActor = await userActorService.createUserActor(
                req.userId,
                parseInt(req.params.actorId as string)
            );
            res.status(HTTP_STATUS.CREATED).json(
                successResponse(newUserActor, "New UserActor created")
            );
        } else {
            throw new Error("User not found");
        }
    } catch( error: unknown) {
        next(error);
    }
}

export const deleteUserActor = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        if (req.userId) {
            await userActorService.deleteUserActor(
                req.userId,
                parseInt(req.params.actorId as string)
            );
            res.status(HTTP_STATUS.OK).json(
                successResponse(null, "UserActor deleted")
            );
        } else {
            throw new Error("User not found");
        }
    } catch (error: unknown) {
        next(error);
    }
}
