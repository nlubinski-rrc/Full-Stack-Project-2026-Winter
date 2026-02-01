import './App.css'
import { Routes, Route } from "react-router-dom"
import { useState } from 'react';
import Nav from './components/common/nav/Nav.tsx';
import Footer from './components/common/footer/footer.tsx';
import LeftSideBar from './components/common/Left-Side-Bar/leftSIdeBar.tsx';
import TopReviewersSideBar from './components/common/top-reviewers-side-bar/topReviewers.tsx';
import MovieGrid from './components/common/movie-grid/movieGrid.tsx';
import WatchlistPage from './components/pages/watchlistPage/watchlist.tsx';
import WatchedMovies from './components/common/watched-movies/watchedmovies.tsx';  // ← CRITICAL
import movies from './components/common/jsonMovies.ts';
import type { Watchlist } from './assets/types/watchlistType.ts';

function App() {
  const [userWatchlist, setWatchlist] = useState<Watchlist>({watchlistItems: []})
  
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <section id="main-section">
              <LeftSideBar movies={movies} />
              <MovieGrid />
              <TopReviewersSideBar />
            </section>
            <Footer />
          </>
        } />
        <Route path="/my-watchlist" element={
          <WatchlistPage watchlist={userWatchlist} setWatchlist={setWatchlist} />
        } />
        <Route path="/watched-movies" element={  // ← CRITICAL ROUTE
          <>
            <section id="main-section">
              <LeftSideBar movies={movies} />
              <WatchedMovies />
              <TopReviewersSideBar />
            </section>
            <Footer />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
