const BASE_URL = "http://localhost:3000";
const ACTORS_ENDPOINT = "/api/v1/actors";

export async function addFavouriteActor(
    actorId: number,
    sessionToken: string
) {
    const queryUrl = `${BASE_URL}${ACTORS_ENDPOINT}/${actorId}/favourite`;
    const res = await fetch(
        queryUrl,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${sessionToken}`
            }
        }
    );

    if (!res.ok) {
        throw new Error("Error adding actor to favourites");
    }
}

export async function deleteFavouriteActor(
    actorId: number,
    sessionToken: string
) {
    const queryUrl = `${BASE_URL}${ACTORS_ENDPOINT}/${actorId}/favourite`;
    const res = await fetch(
        queryUrl,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${sessionToken}`
            }
        }
    );

    if (!res.ok) {
        throw new Error("Error removing actor from favourites")
    }
}