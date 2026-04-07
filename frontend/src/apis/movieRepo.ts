import type { Movie } from "../types/movie";

const BASE_URL = "http://localhost:3000";
const MOVIES_ENDPOINT = "/api/v1/movies";

type BackendMovie = {
    id: number;
    title: string;
    overview: string;
    averageRating: number;
    releaseDate: string;
};

type ApiResponse<T> = {
    data: T;
    message: string;
};

function mapBackendMovie(movie: BackendMovie): Movie {
    return {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        averageRating: movie.averageRating,
        releaseDate: movie.releaseDate,
    };
}

export async function fetchMovies(): Promise<Movie[]> {
    const res = await fetch(`${BASE_URL}${MOVIES_ENDPOINT}`);
    if (!res.ok) {
        throw new Error("Failed to fetch movies");
    }

    const json: ApiResponse<Movie[]> = await res.json();
    console.log(json);
    return json.data.map(mapBackendMovie);
}

// Unused right now, Keeping in case it is needed for future fetches
export async function getMovieById(movieId: number): Promise<Movie> {
    const res = await fetch(`${BASE_URL}${MOVIES_ENDPOINT}/${movieId}`);

    if (!res.ok) {
        throw new Error(`Could not find movie Id ${movieId}`);
    }

    const movie: ApiResponse<Movie> = await res.json();
    return mapBackendMovie(movie.data);
}
