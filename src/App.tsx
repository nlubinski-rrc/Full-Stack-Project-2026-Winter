import './App.css'
import Footer from './components/common/footer/Footer.tsx'
import Nav from './components/common/nav/Nav.tsx';
import LeftSideBar from './components/common/Left-Side-Bar/leftSIdeBar.tsx'
import movies from './components/common/jsonMovies.tsx'

function App() {
  return (
    <>
      <Nav />
      <Footer /> 
      <LeftSideBar movies={movies} />
    </>
  );
};

export default App
