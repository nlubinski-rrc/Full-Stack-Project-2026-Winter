import JSON from "../../../testMovieData.json";

const movies = JSON.results.map((movie) => ({
  id: movie.id,
  title: movie.title,
  rating: movie.vote_average,
  description: movie.overview,
}));

export default movies;