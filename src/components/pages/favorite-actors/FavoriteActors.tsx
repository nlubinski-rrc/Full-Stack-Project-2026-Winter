import type { Actor } from "../../../types/actor";
import ActorListDisplay from "../../common/actor-list-display/ActorListDisplay.tsx"
import "./favoriteActors.css"

function FavoriteActorsPage(
    {
        actors,
        updateActors
    }:
    {
        actors: Actor[],
        updateActors: React.Dispatch<React.SetStateAction<Actor[]>>
    }) {

    return(
    <div id="fav-actors-container">
        <section>
        <ActorListDisplay
            actors={actors.filter(a => !a.isFavorite)}
            updateActors={updateActors} 
        />
        </section>
        <section>
        <ActorListDisplay 
            actors={actors.filter(a => a.isFavorite)}
            updateActors={updateActors}
            />
        </section>
    </div>
    );
}

export default FavoriteActorsPage;