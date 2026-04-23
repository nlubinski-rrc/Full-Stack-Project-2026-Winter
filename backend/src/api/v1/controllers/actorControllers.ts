import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import * as actorServices from "../services/actorServices";
import { successResponse, errorResponse } from "../../../models/responseModel";
import { FrontendActor } from "../types/frontendActor";
import { ActorWithUsers } from "../types/actorWithUsers";
// import { Actor } from "../../../models/actorModel";
import { Actor } from "../../../../generated/prisma/client";

export const getAllActors = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const userId = req.userId;
        const actors: ActorWithUsers[] = await actorServices.getAllActors();

        const userActors: FrontendActor[] = actors.map(a => {
            const {id, name} = a;

            return {
                id: id,
                name: name,
                isFavorite: (userId != null) && a.userActors.some(userActor => userActor.userId === userId)
            }
        }) 

        res.status(HTTP_STATUS.OK).json(
            successResponse(userActors, "Actors retrieved successfully")
        );
    } catch (error: unknown) {
        next(error);
    }
};

export const getActorById = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const actorId = parseInt(idParam, 10);

        const actor: Actor | null = await actorServices.getActorById(actorId);

        if (actor) {
            res.status(HTTP_STATUS.OK).json(
                successResponse(actor, "Actor retrieved successfully")
            );
        } else {
            res.status(HTTP_STATUS.BAD_REQUEST).json(
                errorResponse(`Actor with ID ${idParam} not found`)
            );
        }
    } catch (error: unknown) {
        next(error);
    }
};

// export const createActor = async (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ): Promise<void> => {
//     try {
//         const newActor = await actorServices.createActor(req.body);
//         res.status(HTTP_STATUS.CREATED).json(
//             successReply(newActor, "Actor created successfully")
//         );
//     } catch (error: unknown) {
//         next(error);
//     }
// };

// FAVOURITE ACTORS NOW HANDLED BY UserActor
// 
// export const updateActor = async (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ): Promise<void> => {
//     try {
//         const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
//         const actorId = parseInt(idParam, 10);

//         const updatedActor: Actor = await actorServices.updateActor(actorId, req.body);
//         res.status(HTTP_STATUS.OK).json(
//             successResponse(updatedActor, "Actor updated successfully")
//         );
//     } catch (error: unknown) {
//         next(error);
//     }
// };

// export const deleteActor = async (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ): Promise<void> => {
//     try {
//         const { id } = req.params;
//         await actorServices.deleteActor(id);
//         res.status(HTTP_STATUS.OK).json(
//             successReply(null, "Actor deleted successfully")
//         );
//     } catch(error: unknown) {
//         next(error);
//     }
// };