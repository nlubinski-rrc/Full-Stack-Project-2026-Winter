import * as ActorRepo from "../apis/actorRepo";
import * as ActorFavouriteRepo from "../apis/actorFavouriteRepo"
import type { Actor } from "../types/actor";

export async function fetchActors(sessionToken?: string|null): Promise<Actor[]> {
    const actors = await ActorRepo.fetchActors(sessionToken);
    return actors;
}

export async function toggleFavouriteActor(actorId: number, sessionToken: string): Promise<void> {
    const actor: Actor = await ActorRepo.getActorById(actorId, sessionToken);
    console.log(actor)
    if (actor.isFavorite) {
        await ActorFavouriteRepo.deleteFavouriteActor(
            actor.id,
            sessionToken
        );
    } else {
        await ActorFavouriteRepo.addFavouriteActor(
            actor.id,
            sessionToken
        );
    }
}