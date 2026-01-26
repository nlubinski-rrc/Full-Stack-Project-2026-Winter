import { useState } from "react";
import ActorCard from "../actor-card/ActorCard";
import type { Actor } from "../../../types/actor";
import "./actor-list.css"

function ActorListDisplay(
    {
        actors,
        updateActors
    }:
    {
        actors: Actor[],
        updateActors: React.Dispatch<React.SetStateAction<Actor[]>>
    }) {
    
    const handleActorFavoriteClick = (actorClicked: Actor): void => {}

    const actorListItems = actors.map((actor) => {
        return (
            <ActorCard
                actor={actor}
                onSaveClick={() => {
                    handleActorFavoriteClick(actor);
                }}
                key={actor.id}
            />
        );
    });
    }