import './App.css'
import Footer from './components/common/footer/footer.tsx'
import Nav from './components/common/nav/Nav.tsx';
import MovieGrid from './components/common/movie-grid/movieGrid.tsx';

import LeftSideBar from './components/common/Left-Side-Bar/leftSIdeBar.tsx'
import movies from './components/common/jsonMovies.tsx'
import TopReviewersSideBar from './components/common/top-reviewers-side-bar/topReviewers.tsx';

function App() {
  return (
    <>
      <Nav />
      <section id='main-section'>
        <LeftSideBar movies={movies} />
        <MovieGrid />
        <TopReviewersSideBar />
      </section>
      <Footer /> 

    </>
  );
};

export default App
