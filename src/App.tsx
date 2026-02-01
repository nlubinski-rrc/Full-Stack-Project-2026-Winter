import './App.css'
import Footer from './components/common/footer/footer.tsx'
import Nav from './components/common/nav/Nav.tsx';
import MovieGrid from './components/common/movie-grid/movieGrid.tsx';
import WatchedMovies from './components/common/watched-movies/watchedmovies.tsx';
import LeftSideBar from './components/common/Left-Side-Bar/leftSIdeBar.tsx'
import movies from './components/common/jsonMovies.ts'
import TopReviewersSideBar from './components/common/top-reviewers-side-bar/topReviewers.tsx';
import WatchlistPage from './components/pages/watchlistPage/watchlist.tsx';
import {Routes, Route} from "react-router-dom"
import { useState } from 'react';
import type { Watchlist } from './assets/types/watchlistType.ts';

function App() {
  const [userWatchlist, setWatchlist] = useState<Watchlist>({watchlistItems: []})
  return (
    <>
      <Nav />
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
          path="/my-watchlist"
          element={
            <>
              <WatchlistPage watchlist={userWatchlist} setWatchlist={setWatchlist} />
            </>
          }
        />
        <Route
          path="/watched-movies"
          element={
            <>
              <section id="main-section">
                <LeftSideBar movies={movies} />
                <WatchedMovies />
                <TopReviewersSideBar />
              </section>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
      </Routes>
    </>
  );
}
export default App;