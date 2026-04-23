import { WatchlistRepository } from "../apis/WatchlistRepository";

type WatchlistItem = {
    movieId: number;
    movieTitle: string;
};

export class WatchlistService {
    constructor(private repo = new WatchlistRepository()) {}

    async getWatchlist(): Promise<WatchlistItem[]> {
        return this.repo.getAll();
    }

    async addToWatchlist(item: WatchlistItem): Promise<void> {
        await this.repo.add(item);
    }

    async removeFromWatchlist(movieId: number): Promise<void> {
        await this.repo.remove(movieId);
    }

    async searchWatchlist(query: string): Promise<WatchlistItem[]> {
        if (!query.trim()) return [];
        return this.repo.search(query);
    }
}