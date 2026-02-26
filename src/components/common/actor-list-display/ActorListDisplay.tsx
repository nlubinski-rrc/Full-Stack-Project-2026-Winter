import ActorCard from "../actor-card/ActorCard";
import type { Actor } from "../../../types/actor";
import "./actor-list.css"

function ActorListDisplay(
    {
        actors,
        // updateActors
        onSaveClick
    }:
    {
        actors: Actor[],
        // updateActors: React.Dispatch<React.SetStateAction<Actor[]>>,
        onSaveClick: (id: number) => void
    }) {
    
    // const handleActorFavoriteClick = (actorClicked: Actor): void => {
    //     updateActors(oldActorState => {
    //         return oldActorState.map(actor => {
    //             if (actor.id === actorClicked.id) {
    //                 const newFavorite = !actor.isFavorite;
    //                 return {...actor, isFavorite: newFavorite};
    //             } else {
    //                 return actor;
    //             }
    //         });
    //     });
    // }

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