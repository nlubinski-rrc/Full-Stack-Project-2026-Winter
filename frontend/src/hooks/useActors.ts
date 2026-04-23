import { useEffect, useState } from "react";
import * as ActorService from "../services/actorService";
import type { Actor } from "../types/actor";
import { useAuth } from "@clerk/clerk-react";

export function useActors(
    dependencies: unknown[],
    filterFn?: ((actor: Actor) => boolean) | null
) {
    const {getToken, isSignedIn} = useAuth();
    const [actors, updateActors] = useState<Actor[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [refreshKey, setRefreshKey] = useState<number>(0);

    async function toggleFavouriteActor(actorId: number) {
        try {
            setError(null);
            const sessionToken = isSignedIn? await getToken() : null;

            if (!sessionToken) {
                throw new Error("Not Authorized");
            } else {
                await ActorService.toggleFavouriteActor(actorId, sessionToken);
            }

            setRefreshKey(key => key + 1);
        } catch (errorObject) {
            setError(`${errorObject}`);
        }
    }

    useEffect(() => {
        let ignore = false;

        async function fetchActors() {
            try {
                setError(null);
                const sessionToken = isSignedIn? await getToken() : null;
                let result = await ActorService.fetchActors(sessionToken);

                if (!ignore && filterFn) {
                    result = result.filter(filterFn);
                }

                if (!ignore) {
                    updateActors([...result]);
                }
            } catch (errorObject) {
                if (!ignore) {
                    setError(`${errorObject}`);
                }
            }
        }

        fetchActors();

        return () => {
            ignore = true;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...dependencies, refreshKey, filterFn]);

    return {
        actors,
        error,
        toggleFavouriteActor
    };
}