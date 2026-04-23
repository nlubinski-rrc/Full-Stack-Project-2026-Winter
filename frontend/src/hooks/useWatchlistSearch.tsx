import { useEffect, useState } from "react";
import { WatchlistService } from "../services/WatchlistService";

type WatchlistItem = {
    movieId: number;
    movieTitle: string;
};

export function useWatchlist() {
    const [watchlistItems, setWatchlistItems] = useState<WatchlistItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const service = new WatchlistService();

    const loadWatchlist = async () => {
        try {
            setLoading(true);
            setError("");
            const data = await service.getWatchlist();
            setWatchlistItems(data);
        } catch (err) {
            setError("Failed to load watchlist");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const addToWatchlist = async (movieId: number, movieTitle: string) => {
        try {
            await service.addToWatchlist({ movieId, movieTitle });
            await loadWatchlist();
        } catch (err) {
            setError("Failed to add to watchlist");
            console.error(err);
        }
    };

    const removeFromWatchlist = async (movieId: number) => {
        try {
            await service.removeFromWatchlist(movieId);
            await loadWatchlist();
        } catch (err) {
            setError("Failed to remove from watchlist");
            console.error(err);
        }
    };

    useEffect(() => {
        loadWatchlist();
    }, []);

    return {
        watchlistItems,
        loading,
        error,
        loadWatchlist,
        addToWatchlist,
        removeFromWatchlist,
    };
}