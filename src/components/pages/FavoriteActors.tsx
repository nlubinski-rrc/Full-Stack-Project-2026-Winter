import { useState } from "react";

type Actor = {
    id: number
    name: string,
    isFavorite: boolean
}

function FavoriteActorsPage() {
    const [actors, setActors] = useState<Actor[]>([
        {id: 1, name: "Ryan Gosling", isFavorite: false},
        {id: 2, name: "Harrison Ford", isFavorite: false},
        {id: 3, name: "Ana de Armas", isFavorite: false},
        {id: 4, name: "Sylvia Hoeks", isFavorite: false},
        {id: 5, name: "Robin Wright", isFavorite: false}
    ]);

    return(<></>)
}

export default FavoriteActorsPage;