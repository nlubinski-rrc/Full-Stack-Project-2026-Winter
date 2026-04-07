import { useEffect, useState } from "react";
import * as MovieService from "../services/movieService";
import type { Movie } from "../types/movie";

/**
 * useMovies is a custom hook that is used whenever access to the movies database
 * is needed. It is also used for searching movies using the filterFn parameter.
 * @param dependencies: Any variables that, when changed, should re-query
 * our list of movies by getting all movies from our service
 * @param filterFn: A filter callback function that is used to search the movie database
 * @returns {
 * movies: An array of all movies, or movies that meet the filter if a filterFn is passed
 * err: An array that stores all errors that may arise to present to the user
 * }
 */
export function useMovies(dependencies: unknown[], filterFn?: ((movie: Movie) => boolean) | null) {
    const [movies, updateMovies] = useState<Movie[]>([]);
    const [err, setErr] = useState<string | null>();
    const [refreshKey, setRefreshKey] = useState<number>(0);

    useEffect(() => {
        let ignore: boolean = false;

        const fetchMovies = async () => {
            try {
                let result = await MovieService.fetchMovies();
                setRefreshKey((key) => key++);

                if (!ignore) {
                    if (filterFn) {
                        result = result.filter(filterFn);
                    }

                    updateMovies([...result]);
                }
            } catch (errorObject) {
                setErr(`${errorObject}`);
            }
        };

        fetchMovies();

        return () => {
            ignore = true;
        };
    }, [...dependencies, refreshKey, filterFn]);

    return {
        movies,
        err,
    };
}
