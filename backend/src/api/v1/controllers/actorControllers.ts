import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import * as actorServices from "../services/actorServices";
import { successReply, errorReply} from "../../../models/responseModel";
import { Actor } from "../../../models/actorModel";

export const getAllActors = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const actors: Actor[] = await actorServices.getAllActors();
        res.status(HTTP_STATUS.OK).json(
            successReply(actors, "Actors retrieved successfully")
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
        const { id } = req.params;
        const actor: Actor = await actorServices.getActorById(id);

        if (actor) {
            res.status(HTTP_STATUS.OK).json(
                successReply(actor, "Actor retrieved successfully")
            );
        } else {
            res.status(HTTP_STATUS.BAD_REQUEST).json(
                errorReply(`Actor with ID ${id} not found`)
            );
        }
    } catch (error: unknown) {
        next(error);
    }
};

export const createActor = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newActor = await actorServices.createActor(req.body);
        res.status(HTTP_STATUS.CREATED).json(
            successReply(newActor, "Actor created successfully")
        );
    } catch (error: unknown) {
        next(error);
    }
};

export const updateActor = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, isFavourite } = req.body;

        const updatedActor: Actor = await actorServices.updateActor(
            id,
            name,
            isFavourite
        );
        res.status(HTTP_STATUS.OK).json(
            successReply(updatedActor, "Actor updated successfully")
        );
    } catch (error: unknown) {
        next(error);
    }
};

export const deleteActor = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { id } = req.params;
        await actorServices.deleteActor(id);
        res.status(HTTP_STATUS.OK).json(
            successReply(null, "Actor deleted successfully")
        );
    } catch(error: unknown) {
        next(error);
    }
};