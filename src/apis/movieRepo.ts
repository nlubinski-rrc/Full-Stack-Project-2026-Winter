import type { Movie } from "../types/movie";
import { movies } from "./mockMovieData"

export function fetchMovies(): Movie[] {
    return movies
}

export function getMovieById(movieId: number): Movie {
    const searchedMovie = movies.find(m => m.Id === movieId)

    if (!searchedMovie) {
        throw new Error(`Could not find movie Id ${movieId}`)
    }

    return searchedMovie
}

export function getMovieByTitle(movieTitle: string): Movie {
    const searchedMovie = movies.find(m => m.title === movieTitle)

    if (!searchedMovie) {
        throw new Error(`Could not find movie title ${movieTitle}`)
    }

    return searchedMovie
}