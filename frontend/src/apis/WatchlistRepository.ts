import { testWatchlist } from '../data/watchlist';

type WatchlistItem = {
  movieId: number;
  movieTitle: string;
};

export class WatchlistRepository {
  async getAll(): Promise<WatchlistItem[]> {
    return testWatchlist;
  }

  async search(query: string): Promise<WatchlistItem[]> {
    const lower = query.toLowerCase();
    return testWatchlist.filter((item: WatchlistItem) =>
      item.movieId.toString().includes(lower) ||
      item.movieTitle.toLowerCase().includes(lower)
    );
  }
}
