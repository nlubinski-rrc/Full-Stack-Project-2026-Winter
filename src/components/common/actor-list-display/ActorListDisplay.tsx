import ActorCard from "../actor-card/ActorCard";
import type { Actor } from "../../../types/actor";
import "./actor-list.css"

function ActorListDisplay(
    {
        actors,
        onSaveClick
    }:
    {
        actors: Actor[],
        onSaveClick: (id: number) => void
    }) {
    const actorListItems = actors.map((actor) => {
        return (
            <ActorCard
                actor={actor}
                onSaveClick={onSaveClick}
                key={actor.id}
            />
        );
    });

    return(<>{actorListItems}</>);
}

export default ActorListDisplay;