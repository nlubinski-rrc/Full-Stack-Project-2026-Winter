import { useEffect, useState } from "react";
import * as ActorService from "../services/actorService";
import type { Actor } from "../types/actor";

export function useActors(
    dependencies: unknown[],
    filterFn?: ((actor: Actor) => boolean) | null
) {
    const [actors, updateActors] = useState<Actor[]>([]);
    const [error, setError] = useState<string | null>();
    const [refreshKey, setRefreshKey] = useState<number>(0);

    // async function fetchActors() {
    //     try {
    //         let result = await ActorService.fetchActors();

    //         if (filterFn) {
    //             result = result.filter(filterFn);
    //         }
    //         updateActors([...result]);
    //     } catch (errorObject) {
    //         setError(`${errorObject}`);
    //     }
    // }

    async function toggleFavouriteActor(actorId: number) {
        try {
            await ActorService.toggleFavouriteActor(actorId);

            // re-fetch terms to update our state once the operation is finished
            setRefreshKey(key => key + 1);
        } catch (errorObject) {
            setError(`${errorObject}`);
        }
    }

    useEffect(() => {
        let ignore: boolean = false;

        async function fetchActors() {
        try {
            let result = await ActorService.fetchActors();

            if (!ignore) {
                if (filterFn) {
                    result = result.filter(filterFn);
                }
            }
            updateActors([...result]);
        } catch (errorObject) {
            setError(`${errorObject}`);
            }
        }
        
        fetchActors();
        
        return () => {
            ignore = true;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...dependencies, refreshKey, filterFn]);

    return {
        actors,
        error,
        toggleFavouriteActor
    }
}