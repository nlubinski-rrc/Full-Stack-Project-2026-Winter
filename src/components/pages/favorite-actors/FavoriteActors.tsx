import type { Watchlist } from "../../../assets/types/watchlistType.ts";
import ActorListDisplay from "../../common/actor-list-display/ActorListDisplay.tsx";
import "./favoriteActors.css";
import type { JSX } from "react";
import { useActors } from "../../../hooks/useActors.ts";

function FavoriteActorsPage({
    userWatchlist,
    setWatchlist,
}: {
    userWatchlist: Watchlist;
    setWatchlist: React.Dispatch<React.SetStateAction<Watchlist>>;
}) {

    const { actors, error, toggleFavouriteActor } = useActors([]);

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
            {error ? <span>Something went wrong: ({error})</span>:
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
            }
        </div>
    );
}

export default FavoriteActorsPage;