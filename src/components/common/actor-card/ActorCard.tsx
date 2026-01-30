import type { Actor } from "../../../types/actor";
import "./actor-card.css"

function ActorCard(
    {
        actor,
        onSaveClick
    }
    : {
        actor: Actor,
        onSaveClick: () => void
    }
) {
    return (
        <div className={`${actor.isFavorite ? "is-favorite" : ""} + actor-card`}>
            <h3>{actor.name}</h3>
            <button onClick={onSaveClick}>
                {actor.isFavorite ? "Unlike" : "Like"}
            </button>
        </div>
    );
}

export default ActorCard;
