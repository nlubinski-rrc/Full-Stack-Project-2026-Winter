import type { Actor } from "../../../types/actor";
import { SignedIn } from "@clerk/clerk-react"
import "./actor-card.css"

function ActorCard(
    {
        actor,
        onSaveClick
    }
    : {
        actor: Actor,
        onSaveClick: (id: number) => void
    }
) {
    return (
        <div className={`${actor.isFavorite ? "is-favorite" : ""} + actor-card`}>
            <h3>{actor.name}</h3>
            <SignedIn>
                <button onClick={() => onSaveClick(actor.id)}>
                    {actor.isFavorite ? "Unlike" : "Like"}
                </button>
            </SignedIn>
        </div>
    );
}

export default ActorCard;
