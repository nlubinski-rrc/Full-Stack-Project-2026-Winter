# Architectural Layout

## Movies Hook

- Takes 2 params:
  - Dependencies: Any variables that, when changed, should re-query our list of movies by getting all movies from our service.
  - filterFn: A filter callback function that is used to search the movie database.

- Includes presentation logic such as setting the movie list state and returning it to components that depend on it, as well as filtering results before returning them to the UI.
- If an error occurs, it sets the error state and returns it for components to present.
- This hook is implemented anywhere that needs to display and movie objects such as the watchlist, movie grid, reviews, etc.

## Movies Service

- Exports a function that returns all movies from the repository. No validation is required yet, but will be needed in the future and will be implemented here when business logic is required.
- Currently only used through the useMovies hook to make calls to the repository.

## Movies Repository

- Exports 3 functions:
  - fetchMovies() returns all movies as an array.
  - getMovieById() returns movies that match the specified Id, not in use yet.
  - getMovieByTitle() returns all movies that match the specified title, also not in use yet.

- Separates out database logic, all database queries must be completed through the repository. Future TMDb API calls will be done through this module.

- Utilized by the movies service to grab data and return to the user.

## Movie Search Service

- Not currently in use, will be implemented with the TMDb API when searches will be debounced.
