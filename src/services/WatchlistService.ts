import { WatchlistRepository } from '../apis/WatchlistRepository';

type WatchlistItem = {
  movieId: number;
  movieTitle: string;
};

export class WatchlistService {
  constructor(private repo = new WatchlistRepository()) {}

  async searchWatchlist(query: string): Promise<WatchlistItem[]> {
    if (!query.trim()) return [];
    return this.repo.search(query);
  }
}
