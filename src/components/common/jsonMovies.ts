import JSON from "../../../testMovieData.json";
const listOfMovies:string[] = []
JSON.results.forEach(movie => {
    listOfMovies.push(movie.title)
})
export default listOfMovies