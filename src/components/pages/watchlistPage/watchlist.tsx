import "./watchlist.css";
import MovieCard from "../../common/movieCard/movieCard";
import { useMovies } from "../../../hooks/movieHook";
import type { Watchlist } from "../../../types/watchlistType";
import MovieSearchBar from "../../common/MovieSearchBar/MovieSearchBar";
import { useWatchlistSearch } from "../../../hooks/useWatchlistSearch";

type WatchlistItem = {
  movieId: number;
  movieTitle: string;
};

type watchListProps = {
  watchlist: Watchlist;
  setWatchlist: React.Dispatch<React.SetStateAction<Watchlist>>;
};

function WatchlistPage({ watchlist, setWatchlist }: watchListProps) {
  const { movies } = useMovies([]);
  const { searchTerm, setSearchTerm, results, search, loading } = useWatchlistSearch();
  
  let movieListItems;

  if (watchlist.watchlistItems.length === 0) {
    movieListItems = <p>No movies in watchlist</p>;
  }

  const movieIds = watchlist.watchlistItems.map((movie) => movie.movieId);

  if (movieIds.length === 0) {
    movieListItems = <p>No movies in watchlist</p>;
  } else {
    movieListItems = movies.map((movie) => {
      if (movieIds.includes(movie.Id)) {
        return (
          <MovieCard
            key={movie.Id}
            movie={[movie.title, movie.averageRating.toString(), movie.overview]}
          />
        );
      }
    });
  }

  return (
    <div id="watchlist-page">
      <h1 id="title-header">My Watchlist</h1>
      
      <div id="search-and-watchlist">
        <MovieSearchBar addItemToList={setWatchlist} />
        <div id="movies">{movieListItems}</div>
      </div>

      {/* NEW WATCHLIST SEARCH FEATURE */}
      <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h3>🔍 Search Watchlist</h3>
        <input
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            search(e.target.value);
          }}
          placeholder="Search watchlist by movie ID or title..."
          style={{ 
            padding: "0.5rem", 
            width: "300px", 
            marginRight: "1rem",
            border: "1px solid #ddd",
            borderRadius: "4px"
          }}
        />
        
        {loading ? (
          <p>Searching...</p>
        ) : results.length > 0 ? (
          <div>
            <p><strong>Found {results.length} result(s):</strong></p>
            {results.map((item: WatchlistItem) => (
              <div 
                key={item.movieId} 
                style={{ 
                  padding: "0.75rem", 
                  borderBottom: "1px solid #eee",
                  backgroundColor: "#f9f9f9",
                  marginBottom: "0.5rem",
                  borderRadius: "4px"
                }}
              >
                <strong>ID:</strong> {item.movieId} | <strong>{item.movieTitle}</strong>
              </div>
            ))}
          </div>
        ) : searchTerm ? (
          <p>No results found for "{searchTerm}"</p>
        ) : null}
      </div>
    </div>
  );
}

export default WatchlistPage;
