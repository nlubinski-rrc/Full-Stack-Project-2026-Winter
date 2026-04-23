type WatchlistItem = {
    movieId: number;
    movieTitle: string;
};

export class WatchlistRepository {
    private baseUrl = "http://localhost:3000/api/v1/watchlist";

    private getHeaders() {
        return {
            "Content-Type": "application/json",
            "x-user-id": "test-user",
        };
    }

    async getAll(): Promise<WatchlistItem[]> {
        const response = await fetch(this.baseUrl, {
            headers: this.getHeaders(),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch watchlist");
        }

        return response.json();
    }

    async search(query: string): Promise<WatchlistItem[]> {
        const response = await fetch(`${this.baseUrl}/search?q=${query}`, {
            headers: this.getHeaders(),
        });

        if (!response.ok) {
            throw new Error("Failed to search watchlist");
        }

        return response.json();
    }

    async add(item: WatchlistItem): Promise<void> {
        const response = await fetch(this.baseUrl, {
            method: "POST",
            headers: this.getHeaders(),
            body: JSON.stringify(item),
        });

        if (!response.ok) {
            throw new Error("Failed to add to watchlist");
        }
    }

    async remove(movieId: number): Promise<void> {
        const response = await fetch(`${this.baseUrl}/${movieId}`, {
            method: "DELETE",
            headers: this.getHeaders(),
        });

        if (!response.ok) {
            throw new Error("Failed to remove from watchlist");
        }
    }
}