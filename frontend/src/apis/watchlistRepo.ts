const BASE_URL = "http://localhost:3000";
const WATCHLIST_ENDPOINT = "/api/v1/watchlist";

export async function fetchWatchlist(sessionToken?: string | null): Promise<any> {
    const res = await fetch(`${BASE_URL}${WATCHLIST_ENDPOINT}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${sessionToken}`,
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch watchlist");
    }

    const json = await res.json();
    console.log(json.data);
    return json.data;
}

export async function addToWatchlist(
    movieId: number,
    sessionToken?: string | null
): Promise<boolean> {
    const res = await fetch(`${BASE_URL}${WATCHLIST_ENDPOINT}/${movieId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionToken}`,
        },
    });

    if (!res.ok) {
        console.log("HERE");
        throw new Error(`Could not find movie Id ${movieId}`);
    }

    return true;
}

export async function removeFromWatchlist(
    movieId: number,
    sessionToken?: string | null
): Promise<boolean> {
    const res = await fetch(`${BASE_URL}${WATCHLIST_ENDPOINT}/${movieId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionToken}`,
        },
    });

    if (!res.ok) {
        throw new Error(`Could not find movie Id ${movieId}`);
    }

    return true;
}
