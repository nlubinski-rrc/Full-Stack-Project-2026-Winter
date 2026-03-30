import { Movie } from "generated/prisma/client";
import { prisma } from "../../../../prisma/client"

export const getAllMovies = async(): Promise<Movie[]> => {
    try {
        return prisma.movie.findMany()
    } catch(err: any) {
        throw new Error(`Failed to get all movies: ${err}`)
    }

}

export const getMovieById = async(id: number): Promise<Movie | null> => {
    try {
        const movie = prisma.movie.findUnique({
            where: {
                id: id
            }
        })

        if (!movie) {
            return null
        } else {
            return movie
        }
    } catch (err: any) {
        throw new Error(`Failed to get movie with Id ${id}: ${err}`)
    }
}

export const getMovieByTitle = async(title: string): Promise<Movie | null> => {
    try {
        const movie = prisma.movie.findUnique({
            where: {
                title: title
            }
        })
        return movie;
    } catch (err: any) {
        throw new Error(`Failed to get movie with title ${title}`)
    }
}