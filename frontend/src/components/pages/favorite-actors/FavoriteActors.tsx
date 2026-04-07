import ActorListDisplay from "../../common/actor-list-display/ActorListDisplay.tsx";
import "./favoriteActors.css";
import type { JSX } from "react";
import { useActors } from "../../../hooks/useActors.ts";
import { useWatchlist } from "../../../hooks/useWatchlist.ts";

function FavoriteActorsPage() {
    const { watchlist, removeFromWatchlist } = useWatchlist([]);
    const { actors, error, toggleFavouriteActor } = useActors([]);

    const watchListItems: JSX.Element[] = watchlist.map((movie) => {
        return (
            <li id="watchListItem" key={movie.Id}>
                {movie.title}
                <button
                    onClick={() => {
                        removeFromWatchlist(movie.Id);
                    }}
                >
                    Remove
                </button>
            </li>
        );
    });

    return (
        <div id="fav-actors-container">
            {error ? (
                <span>Something went wrong: ({error})</span>
            ) : (
                <>
                    <section>
                        <ActorListDisplay
                            actors={actors.filter((a) => !a.isFavorite)}
                            onSaveClick={toggleFavouriteActor}
                        />
                    </section>
                    <section>
                        <ActorListDisplay
                            actors={actors.filter((a) => a.isFavorite)}
                            onSaveClick={toggleFavouriteActor}
                        />
                    </section>
                    <section id="watchListContainer">
                        <h3>Your Watchlist</h3>
                        <ul>{watchListItems}</ul>
                    </section>
                </>
            )}
        </div>
    );
}

export default FavoriteActorsPage;
