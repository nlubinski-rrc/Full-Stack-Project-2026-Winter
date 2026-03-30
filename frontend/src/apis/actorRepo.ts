import type { Actor } from "../types/actor";

const BASE_URL = "http://localhost:3000/api/v1/actors";

type BackendActor = {
    id: number;
    name: string;
    isFavourite: boolean;
};

type ApiResponse<T> = {
    data: T;
    message: string;
};

function mapBackendActor(actor: BackendActor): Actor {
    return {
        id: actor.id,
        name: actor.name,
        isFavorite: actor.isFavourite,
    };
}

export async function fetchActors(): Promise<Actor[]> {
    const res = await fetch(BASE_URL);

    if (!res.ok) {
        throw new Error("Failed to fetch actors");
    }

    const json: ApiResponse<BackendActor[]> = await res.json();
    return json.data.map(mapBackendActor);
}

export async function getActorById(actorId: number): Promise<Actor> {
    const res = await fetch(`${BASE_URL}/${actorId}`);

    if (!res.ok) {
        throw new Error("Failed to fetch actor");
    }

    const json: ApiResponse<BackendActor> = await res.json();
    return mapBackendActor(json.data);
}

export async function addFavouriteActor(actorId: number): Promise<void> {
    const actor = await getActorById(actorId);

    const res = await fetch(`${BASE_URL}/${actorId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: actor.id,
            name: actor.name,
            isFavourite: true,
        }),
    });

    if (!res.ok) {
        throw new Error("Failed to favourite actor");
    }
}

export async function deleteFavouriteActor(actorId: number): Promise<void> {
    const actor = await getActorById(actorId);

    const res = await fetch(`${BASE_URL}/${actorId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: actor.id,
            name: actor.name,
            isFavourite: false,
        }),
    });

    if (!res.ok) {
        throw new Error("Failed to unfavourite actor");
    }
}