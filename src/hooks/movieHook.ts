import { useEffect, useState } from "react";
import * as MovieService from "../services/movieService"
import type { Movie } from "../types/movie"

export function useMovies(
    dependencies: unknown[],
    filterFn? : ((movie: Movie) => boolean) | null
) {
    const [movies, updateMovies] = useState<Movie[]>([]);
    const [err, setErr] = useState<string | null>();

    const fetchMovies = async() => {
        try {
            let result = await MovieService.fetchMovies();

            if (filterFn) {
                result = result.filter(filterFn)
            }

            updateMovies([...result])
        } catch(err: any) {
            setErr(`${err}`)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [...dependencies])

    return {
        movies,
        err
    }
}
