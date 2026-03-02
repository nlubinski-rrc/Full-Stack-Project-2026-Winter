import * as MovieRepo from "../apis/movieRepo";

export async function fetchMovies() {
    const movies = await MovieRepo.fetchMovies();
    return movies;
}
