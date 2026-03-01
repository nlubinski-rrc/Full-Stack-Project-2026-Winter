import * as ActorRepo from "../apis/actorRepo";
import type { Actor } from "../types/actor";

export async function fetchActors() {
    const actors = ActorRepo.fetchActors();
    return actors;
}

export async function toggleFavouriteActor(actorId: number) {
    const actor: Actor = ActorRepo.getActorById(actorId);

    if (actor.isFavorite) {
        ActorRepo.deleteFavouriteActor(actor.id);
    } else {
        ActorRepo.addFavouriteActor(actor.id);
    }
}