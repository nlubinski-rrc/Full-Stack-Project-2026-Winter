import * as WatchlistRepo from "../apis/watchlistRepo";

export async function fetchWatchlist(sessionToken?: string | null) {
    const watchlist = await WatchlistRepo.fetchWatchlist(sessionToken);
    return watchlist;
}

export async function addToWatchlist(movieId: number, sessionToken?: string | null) {
    const response = await WatchlistRepo.addToWatchlist(movieId, sessionToken);
    return response;
}

export async function removeFromWatchlist(movieId: number, sessionToken?: string | null) {
    const response = await WatchlistRepo.removeFromWatchlist(movieId, sessionToken);
    return response;
}
