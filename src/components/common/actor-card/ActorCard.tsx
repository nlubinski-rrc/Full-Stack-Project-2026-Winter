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
        <div className="actor-card">
            <h3>{actor.name}</h3>
            <button onClick={onSaveClick} className={actor.isFavorite ? "is-favorite" : ""}>
            </button>
        </div>
    );
}

export default ActorCard;
