import './App.css'
import Footer from './components/common/footer/footer.tsx'
import Nav from './components/common/nav/Nav.tsx';

import LeftSideBar from './components/common/Left-Side-Bar/leftSIdeBar.tsx'
import movies from './components/common/jsonMovies.tsx'
import TopReviewersSideBar from './components/common/top-reviewers-side-bar/topReviewers.tsx';

function App() {
  return (
    <>
      <Nav />
      <TopReviewersSideBar />
      <Footer /> 
      <LeftSideBar movies={movies} />

    </>
  );
};

export default App
