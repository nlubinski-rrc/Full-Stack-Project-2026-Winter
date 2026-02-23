import { useEffect, useState } from "react";
import * as MovieService from "../services/movieService";
import type { Movie } from "../types/movie";

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
