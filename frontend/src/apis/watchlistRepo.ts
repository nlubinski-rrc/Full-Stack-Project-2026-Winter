import type { Movie } from "../types/movie";

const BASE_URL = "http://localhost:3000";
const WATCHLIST_ENDPOINT = "/api/v1/watchlist";

type BackendMovie = {
    id: number;
    title: string;
    overview: string;
    averageRating: number;
    releaseDate: string;
};

type WatchlistItem = {
    movieId: number;
    userId: string;
    movie: BackendMovie;
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

export async function fetchWatchlist(sessionToken?: string | null): Promise<Movie[]> {
    const res = await fetch(`${BASE_URL}${WATCHLIST_ENDPOINT}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${sessionToken}`,
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch watchlist");
    }

    const json: ApiResponse<WatchlistItem[]> = await res.json();
    return json.data.map((item) => mapBackendMovie(item.movie));
}

export async function addToWatchlist(
    movieId: number,
    sessionToken?: string | null
): Promise<Movie> {
    const res = await fetch(`${BASE_URL}${WATCHLIST_ENDPOINT}/${movieId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionToken}`,
        },
    });

    if (!res.ok) {
        throw new Error(`Could not find movie Id ${movieId}`);
    }

    const movie: ApiResponse<Movie> = await res.json();
    return mapBackendMovie(movie.data);
}

export async function removeFromWatchlist(
    movieId: number,
    sessionToken?: string | null
): Promise<Movie> {
    const res = await fetch(`${BASE_URL}${WATCHLIST_ENDPOINT}/${movieId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionToken}`,
        },
    });

    if (!res.ok) {
        throw new Error(`Could not find movie Id ${movieId}`);
    }

    const movie: ApiResponse<Movie> = await res.json();
    return mapBackendMovie(movie.data);
}
