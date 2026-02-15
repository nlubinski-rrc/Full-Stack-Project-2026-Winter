import * as MovieRepo from "../apis/movieRepo"
import type { Movie } from "../types/movie"

export async function fetchMovies() {
    const movies = await MovieRepo.fetchMovies()
    return movies
}

