import type { Actor } from "../../../types/actor";
import type { Watchlist } from "../../../types/watchlistType.ts";
import ActorListDisplay from "../../common/actor-list-display/ActorListDisplay.tsx";
import "./favoriteActors.css";
import type { JSX } from "react";

function FavoriteActorsPage({
    actors,
    updateActors,
    userWatchlist,
    setWatchlist,
}: {
    actors: Actor[];
    updateActors: React.Dispatch<React.SetStateAction<Actor[]>>;
    userWatchlist: Watchlist;
    setWatchlist: React.Dispatch<React.SetStateAction<Watchlist>>;
}) {
    const watchListItems: JSX.Element[] = userWatchlist.watchlistItems.map((movie) => {
        return (
            <li id="watchListItem" key={movie.movieId}>
                {movie.movieTitle}
                <button
                    onClick={() => {
                        const newList = userWatchlist.watchlistItems.filter(
                            (filteredMovie) => filteredMovie.movieId != movie.movieId
                        );
                        setWatchlist({
                            watchlistItems: newList,
                        });
                    }}
                >
                    Remove
                </button>
            </li>
        );
    });

    return (
        <div id="fav-actors-container">
            <section>
                <ActorListDisplay
                    actors={actors.filter((a) => !a.isFavorite)}
                    updateActors={updateActors}
                />
            </section>
            <section>
                <ActorListDisplay
                    actors={actors.filter((a) => a.isFavorite)}
                    updateActors={updateActors}
                />
            </section>
            <section id="watchListContainer">
                <h3>Your Watchlist</h3>
                <ul>{watchListItems}</ul>
            </section>
        </div>
    );
}

export default FavoriteActorsPage;
