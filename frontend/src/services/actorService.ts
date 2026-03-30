import * as ActorRepo from "../apis/actorRepo";
import type { Actor } from "../types/actor";

export async function fetchActors(): Promise<Actor[]> {
    const actors = await ActorRepo.fetchActors();
    return actors;
}

export async function toggleFavouriteActor(actorId: number): Promise<void> {
    const actor: Actor = await ActorRepo.getActorById(actorId);

    if (actor.isFavorite) {
        await ActorRepo.deleteFavouriteActor(actor.id);
    } else {
        await ActorRepo.addFavouriteActor(actor.id);
    }
}