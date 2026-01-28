import "./watchedmovies.css";
import { useState } from 'react';

interface Movie {
  title: string;
  vote_average: number;
  overview: string;
  watched: boolean;
}

function WatchedMovies() {
  const [movies, setMovies] = useState<Movie[]>([
    {
      title: "Inception",
      vote_average: 8.8,
      overview: "A thief who steals corporate secrets through dream-sharing tech",
      watched: false
    },
    {
      title: "The Matrix", 
      vote_average: 8.7,
      overview: "A computer hacker learns reality is a simulation",
      watched: false
    },
    {
      title: "Jurassic Park",
      vote_average: 8.2,
      overview: "Dinosaurs cloned using ancient DNA",
      watched: false
    }
  ]);

  const toggleWatched = (index: number) => {
    setMovies(movies.map((movie, i) => 
      i === index ? { ...movie, watched: !movie.watched } : movie
    ));
  };

  const watchedMovies = movies.filter(movie => movie.watched);
  const unwatchedMovies = movies.filter(movie => !movie.watched);

  return (
    <>
      <h2>Watched Movies ({watchedMovies.length})</h2>
      <div className="movie-grid">
        {watchedMovies.map((movie, index) => (
          <div key={movie.title} className="movie-card watched">
            <h3>{movie.title}</h3>
            <div>Rating: {movie.vote_average}</div>
            <div>{movie.overview}</div>
            <button onClick={() => toggleWatched(index)}>
              Mark Unwatched
            </button>
          </div>
        ))}
      </div>

      <h2>To Watch ({unwatchedMovies.length})</h2>
      <div className="movie-grid">
        {unwatchedMovies.map((movie, index) => (
          <div key={movie.title} className="movie-card">
            <h3>{movie.title}</h3>
            <div>Rating: {movie.vote_average}</div>
            <div>{movie.overview}</div>
            <button onClick={() => toggleWatched(index)}>
              Mark Watched
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default WatchedMovies;
