import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { WatchlistService } from "../services/WatchlistService";

type WatchlistItem = {
    movieId: number;
    movieTitle: string;
};

const service = new WatchlistService();
const WATCHLIST_QUERY_KEY = ["watchlist"];

export function useWatchlist() {
    const queryClient = useQueryClient();

    const {
        data: watchlistItems = [],
        isLoading: loading,
        isFetching,
        error: queryError,
    } = useQuery<WatchlistItem[]>({
        queryKey: WATCHLIST_QUERY_KEY,
        queryFn: () => service.getWatchlist(),
        staleTime: 1000 * 60,
        refetchOnWindowFocus: false,
    });

    const addMutation = useMutation({
        mutationFn: ({ movieId, movieTitle }: WatchlistItem) =>
            service.addToWatchlist({ movieId, movieTitle }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: WATCHLIST_QUERY_KEY });
        },
    });

    const removeMutation = useMutation({
        mutationFn: (movieId: number) => service.removeFromWatchlist(movieId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: WATCHLIST_QUERY_KEY });
        },
    });

    return {
        watchlistItems,
        loading,
        isFetching,
        isAdding: addMutation.isPending,
        isRemoving: removeMutation.isPending,
        error: queryError ? "Failed to load watchlist" : "",
        addToWatchlist: async (movieId: number, movieTitle: string) => {
            await addMutation.mutateAsync({ movieId, movieTitle });
        },
        removeFromWatchlist: async (movieId: number) => {
            await removeMutation.mutateAsync(movieId);
        },
    };
}