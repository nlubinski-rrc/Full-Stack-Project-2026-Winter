import { useEffect, useState } from "react";
import * as WatchlistService from "../services/WatchlistService";
import type { Movie } from "../types/movie";
import { useAuth } from "@clerk/clerk-react";

/**
 * useMovies is a custom hook that is used whenever access to the movies database
 * is needed. It is also used for searching movies using the filterFn parameter.
 * @param dependencies: Any variables that, when changed, should re-query
 * our list of movies by getting all movies from our service
 * @returns {
 * movies: An array of all movies in the user's watchlist
 * err: An array that stores all errors that may arise to present to the user
 * }
 */
export function useWatchlist(dependencies: unknown[]) {
    const [watchlist, updateWatchlist] = useState<Movie[]>([]);
    const [err, setErr] = useState<string | null>();
    const [loading, setLoading] = useState<boolean>(false);
    const [refreshKey, setRefreshKey] = useState<number>(0);
    const { getToken, isSignedIn } = useAuth();

    const removeFromWatchlist = async (movieId: number) => {
        try {
            let sessionToken = isSignedIn ? await getToken() : null;
            const response = await WatchlistService.removeFromWatchlist(movieId, sessionToken);

            if (!response) {
                throw new Error("Error removing from watchlist");
            }
            setRefreshKey((key) => key + 1);
        } catch (err: any) {
            setErr(err);
        }
    };

    const addToWatchlist = async (movieId: number) => {
        try {
            setLoading(true);
            if (watchlist.some((m) => Number(m.id) === Number(movieId))) {
                alert("Movie already in watchlist");
                setLoading(false);
                return;
            }

            const sessionToken = isSignedIn ? await getToken() : null;
            await WatchlistService.addToWatchlist(movieId, sessionToken);

            setRefreshKey((key) => key + 1);
            setLoading(false);
        } catch (err: any) {
            setErr(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        let ignore: boolean = false;

        const fetchWatchlist = async () => {
            try {
                setLoading(true);
                let sessionToken = isSignedIn ? await getToken() : null;
                let result = await WatchlistService.fetchWatchlist(sessionToken);
                const formattedMovies: Movie[] = [];
                for (const item of result) {
                    if (item.movie) {
                        formattedMovies.push({
                            id: item.movie.id,
                            title: item.movie.title,
                            overview: item.movie.overview,
                            averageRating: item.movie.averageRating,
                            releaseDate: item.movie.releaseDate,
                        });
                    }
                }
                if (!ignore) {
                    updateWatchlist([...formattedMovies]);
                }
                setLoading(false);
                console.log(watchlist);
            } catch (errorObject) {
                setErr(`${errorObject}`);
                setLoading(false);
            }
        };

        fetchWatchlist();

        return () => {
            ignore = true;
        };
    }, [...dependencies, refreshKey]);

    return {
        watchlist,
        removeFromWatchlist,
        addToWatchlist,
        err,
        loading,
    };
}
