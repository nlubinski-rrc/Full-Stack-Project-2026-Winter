import * as ActorRepo from "../apis/actorRepo";
import type { Actor } from "../types/actor";

export function fetchActors() {
    const actors = ActorRepo.fetchActors();
    return actors;
}

export function toggleFavouriteActor(actorId: number) {
    const actor: Actor = ActorRepo.getActorById(actorId);

    if (actor.isFavorite) {
        ActorRepo.deleteFavouriteActor(actor.id);
    } else {
        ActorRepo.addFavouriteActor(actor.id);
    }
}