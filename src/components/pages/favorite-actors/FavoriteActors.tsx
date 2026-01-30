import { useState } from "react";
import type { Actor } from "../../../types/actor";
import ActorListDisplay from "../../common/actor-list-display/ActorListDisplay.tsx"
import "./favoriteActors.css"

const actorData: Actor[] = [
    {
        id: 1,
        name: "Ryan Gosling",
        isFavorite: false
    },
    {
        id: 2,
        name: "Harrison Ford",
        isFavorite: false
    },
    {
        id: 3,
        name: "Ana de Armas",
        isFavorite: false
    },
    {
        id: 4,
        name: "Dave Bautista",
        isFavorite: false
    },
    {
        id: 5,
        name: "Robin Wright",
        isFavorite: false
    }
];

function FavoriteActorsPage() {
    const [actors, updateActors] = useState<Actor[]>(actorData);

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