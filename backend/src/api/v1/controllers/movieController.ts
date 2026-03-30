import { Request, Response, NextFunction } from "express";
import { Movie } from "generated/prisma/client";
import * as movieService from "../services/movieService";
import { successResponse } from "../../../models/responseModel";

export const getAllMovies = async(
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const movies: Movie[] = await movieService.getAllMovies()
        res.status(200).json(successResponse(movies, "Movies successfully retrieved"))
    } catch (err: any) {
        next(err)
    }
}

export const getMovieById = async(
    req: Request,
    res: Response,
    next: NextFunction    
): Promise<void> => {
    try {
        const movie: Movie | null = await movieService.getMovieByTitle(req.params.title as string);
        if (movie) {
            res.status(200).json(successResponse(movie, "Movie successfully retrieved"))
        } else {
            throw new Error(`Movie Id ${req.body.id} not found`)
        }

    } catch (err: any) {
        next(err)
    }
}

export const getMovieByTitle = async(
    req: Request,
    res: Response,
    next: NextFunction      
): Promise<void> => {
    try {
        const movie: Movie | null = await movieService.getMovieByTitle(req.params.title as string);
        if (movie) {
            res.status(200).json(successResponse(movie, "Movie successfully retrieved"))
        } else {
            throw new Error(`Movie Id ${req.body.title} not found`)
        }

    } catch (err: any) {
        next(err)
    }
}