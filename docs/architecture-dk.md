# Architectural Layout

Dylan Kaspick

## Actors Hook

**Parameters:**

- `dependencies` - A list of dependencies for the hook.
- `filterFn` - A function used by the hook to filter actors when the hook is created.

The actors hook is used whenever a front end component wants to use and display data from the actors database. It supplies the functions for fetching and filtering the data. Additionally it exposes the function `toggleFavouriteActor()` which is used to mark an actor as a favourite, or unmark it.

The logic in this hook mostly consists of the ability to fetch and display desired actor data. It also exposes the ability to alter the "favourite" status of an actor.

**Used By:**

- `FavoriteActors.tsx` - Used by the favourite actors page to fetch and display favourited actors. Also used to set an actor as a favourite.

## Actors Service

The actors service is responsible for the business logic involved with the use of actor data. This service contains 2 functions:

- `fetchActors()` - Used to interface with the actors repository when wanting to use a list of all actors.
- `toggelFavouriteActor()` - Determines the `isFavourite` state of an actor to call the correct repository function.

The only real logic present in the service is in `toggleFavouriteActor()`. I decided that this logic should be in a service because it isn't used for presenting and data. It is not in the repository because I believe this is logic that we will want to determine before sending a request to a database.

**Used By:**

- `useActors.ts` - This service is only currently used by the actors hook, as the hook is responsible for using the service when a "favourite toggle" click has occurred.

## Actors Repository

The actors repository is used for all actions that require making an update to the database. Functions that are currently present are:

- `fetchActors()` - Returns all actors from the database.
- `getActorById()` - Returns an actor based on the given ID.
- `updateActor()` - Updates an existing actor with new data.
- `addFavouriteActor()` - Changes the `isFavourite` property of and actor to true.
- `deleteFavouriteActor()` - Changes the `isFavourite` property of an actor to false.

I've decided that all the logic above should be included in the repository because all of these function want to make changes, or request data, from the database. None are responsible for presentation so they are not in the hook. Also, none of the functions are making any decisions on data that you might see in business logic so they are not in the service.

**Used By:**

- `actorService.ts` - The actor repository is only accessible by the service for this project.