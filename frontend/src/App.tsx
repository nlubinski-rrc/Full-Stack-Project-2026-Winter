import "./App.css";
import Footer from "./components/common/footer/footer.tsx";
import Nav from "./components/common/nav/Nav.tsx";
import MovieGrid from "./components/common/movie-grid/movieGrid.tsx";
import LeftSideBar from "./components/common/Left-Side-Bar/leftSIdeBar.tsx";
import movies from "./components/common/jsonMovies.ts";
import TopReviewersSideBar from "./components/common/top-reviewers-side-bar/topReviewers.tsx";
import WatchlistPage from "./components/pages/watchlistPage/watchlist.tsx";
import FavoriteActorsPage from "./components/pages/favorite-actors/FavoriteActors.tsx";
import WatchedMovies from "./components/common/watched-movies/watchedmovies.tsx";
import { Routes, Route } from "react-router-dom";
import { CreateReview } from "./components/pages/createReview/createReview.tsx";
import { useState } from "react";
import type { Watchlist } from "./types/watchlistType.ts";

function App() {
    const [userWatchlist, setWatchlist] = useState<Watchlist>({ watchlistItems: [] });
    return (
        <>
            <Nav></Nav>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <section id="main-section">
                                <LeftSideBar movies={movies} />
                                <MovieGrid />
                                <TopReviewersSideBar />
                            </section>
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/create-reviews"
                    element={
                        <>
                            <CreateReview watchlist={userWatchlist} setWatchlist={setWatchlist} />
                        </>
                    }
                />
                <Route
                    path="/my-watchlist"
                    element={
                        <>
                            <WatchlistPage watchlist={userWatchlist} setWatchlist={setWatchlist} />
                        </>
                    }
                />
                <Route
                    path="/favorite-actors"
                    element={
                        <FavoriteActorsPage
                            userWatchlist={userWatchlist}
                            setWatchlist={setWatchlist}
                        />
                    }
                />
                <Route path="/watched-movies" element={<WatchedMovies />} />
            </Routes>
        </>
    );
}
export default App;
