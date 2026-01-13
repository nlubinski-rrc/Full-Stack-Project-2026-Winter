import './App.css'
import Footer from "./components/common/footer/footer.tsx"
import Nav from './components/common/nav/Nav.tsx';
import MovieGrid from './components/common/movie-grid/movieGrid.tsx';

function App() {
  return (
    <>
      <Nav />
      <MovieGrid />
      <Footer /> 
    </>
  );
};

export default App
