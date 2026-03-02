import type { Actor } from "../types/actor";
import { actorData } from "./actorData";

export function fetchActors(): Actor[] {
    return actorData;
}

export function getActorById(actorId: number): Actor {
    const foundActor = actorData.find(a => a.id === actorId);

    if (!foundActor) {
        throw new Error(`Failed to fetch actor with ${actorId}`);
    }

    return foundActor;
}

export function updateActor(actor: Actor) {
    const foundActorIndex = actorData.findIndex(a => a.id === actor.id);

    if (foundActorIndex === -1) {
        throw new Error(`Failed to update actor with ${actor.id}`);
    }

    actorData[foundActorIndex] = actor;
    return actorData[foundActorIndex];
}

export function addFavouriteActor(actorId: number) {
    const foundActor = actorData.find(a => a.id === actorId);

    if (!foundActor) {
        throw new Error(`Failed to fetch actor with ${actorId}`);
    } else {
        foundActor.isFavorite = true;
    }

    return foundActor;
}

export function deleteFavouriteActor(actorId: number) {
    const foundActor = actorData.find(a => a.id === actorId);

    if (!foundActor) {
        throw new Error(`Failed to fetch term with ${actorId}`);
    } else {
        foundActor.isFavorite = false;
    }

    return foundActor;
}