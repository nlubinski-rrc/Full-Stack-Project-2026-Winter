import './App.css'
import Footer from './components/common/footer/footer.tsx'
import Nav from './components/common/nav/Nav.tsx';
import MovieGrid from './components/common/movie-grid/movieGrid.tsx';

import LeftSideBar from './components/common/Left-Side-Bar/leftSIdeBar.tsx'
import movies from './components/common/jsonMovies.ts'
import TopReviewersSideBar from './components/common/top-reviewers-side-bar/topReviewers.tsx';
import WatchlistPage from './components/pages/watchlistPage/watchlist.tsx';
import FavoriteActorsPage from './components/pages/favorite-actors/FavoriteActors.tsx';
import { actorData } from './components/pages/favorite-actors/actorData.ts';
import {Routes, Route} from "react-router-dom"
import { useState } from 'react';
import type { Watchlist } from './assets/types/watchlistType.ts';
import type { Actor } from './types/actor.ts';

function App() {
  const [userWatchlist, setWatchlist] = useState<Watchlist>({watchlistItems: []})
  const [actors, updateActors] = useState<Actor[]>(actorData);
  return (
    <>
    <Nav></Nav>
    <Routes>
      <Route
        path='/'
        element={
          <>
      <section id='main-section'>
        <LeftSideBar movies={movies} />
        <MovieGrid />
        <TopReviewersSideBar />
      </section>
      <Footer />
      </>
        }/>
      <Route
      path='/my-watchlist'
      element={
        <>
        <WatchlistPage watchlist={userWatchlist} setWatchlist={setWatchlist}/>
        </>
      }
      />
      <Route 
        path="/favorite-actors"
        element={
          <FavoriteActorsPage 
            actors={actors}
            updateActors={updateActors}
            userWatchlist={userWatchlist}
            setWatchlist={setWatchlist}
            />
        }
      />
    
    </Routes>
       

    </>
  );
};

export default App
