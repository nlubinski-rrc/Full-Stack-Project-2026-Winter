type WatchlistItem = {
  movieId: number;
  movieTitle: string;
};

export class WatchlistRepository {
  private baseUrl = "http://localhost:3000/api/watchlist";

  async getAll(): Promise<WatchlistItem[]> {
    const response = await fetch(this.baseUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch watchlist");
    }

    return response.json();
  }

  async search(query: string): Promise<WatchlistItem[]> {
    const response = await fetch(`${this.baseUrl}/search?q=${query}`);

    if (!response.ok) {
      throw new Error("Failed to search watchlist");
    }

    return response.json();
  }

  async add(item: WatchlistItem): Promise<void> {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error("Failed to add to watchlist");
    }
  }

  async remove(movieId: number): Promise<void> {
    const response = await fetch(`${this.baseUrl}/${movieId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to remove from watchlist");
    }
  }
}