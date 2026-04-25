import { Request, Response, NextFunction } from "express";
import * as watchlistService from "../services/watchlistService";
import { errorResponse, successResponse } from "../../../models/responseModel";
import { HTTP_STATUS } from "src/constants/httpConstants";

export const getUserWatchlist = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        if (req.userId) {
            const watchlist = await watchlistService.getUserWatchlist(req.userId);
            if (watchlist) {
                res.status(200).json(
                    successResponse(watchlist, "User watchlist successfully retrieved")
                );
            } else {
                res.status(404).json(errorResponse("Could not find user"));
            }
        } else {
            res.status(HTTP_STATUS.BAD_REQUEST).json(errorResponse("Missing user Id"));
        }
    } catch (err: any) {
        next(err);
    }
};

export const addToWatchlist = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        if (req.userId && req.params.id) {
            const watchlistItem = await watchlistService.addToWatchlist(
                Number.parseInt(req.params.id as string),
                req.userId
            );
            if (watchlistItem) {
                res.status(200).json(successResponse(watchlistItem, "Movie added to watchlist"));
            } else {
                res.status(404).json(errorResponse("Could not add movie to watchlist"));
            }
        } else {
            res.status(HTTP_STATUS.BAD_REQUEST).json(errorResponse("Missing user Id or movie Id"));
        }
    } catch (err: any) {
        next(err);
    }
};

export const removeFromWatchlist = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        if (req.userId && req.params.id) {
            const watchlistItem = await watchlistService.removeFromWatchlist(
                Number.parseInt(req.params.id as string),
                req.userId
            );
            if (watchlistItem) {
                res.status(200).json(
                    successResponse(watchlistItem, "Movie removed from watchlist")
                );
            } else {
                res.status(404).json(errorResponse("Could not remove movie from watchlist"));
            }
        } else {
            res.status(HTTP_STATUS.BAD_REQUEST).json(errorResponse("Missing user Id or movie Id"));
        }
    } catch (err: any) {
        next(err);
    }
};
