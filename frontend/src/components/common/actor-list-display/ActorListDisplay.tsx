import type { Actor } from "../../../types/actor";
import ActorCard from "../actor-card/ActorCard";

function ActorListDisplay(
    {
        actors,
        onSaveClick
    }: {
        actors: Actor[];
        onSaveClick: (id: number) => void;
    }
) {
    return (
        <div>
            {actors.map((actor) => (
                <ActorCard
                    key={actor.id}
                    actor={actor}
                    onSaveClick={onSaveClick}
                />
            ))}
        </div>
    );
}

export default ActorListDisplay;