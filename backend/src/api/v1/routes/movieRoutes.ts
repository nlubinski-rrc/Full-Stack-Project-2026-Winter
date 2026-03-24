import express, {Router} from "express";
import * as movieController from "../controllers/movieController";

const router: Router = express.Router()

router.get("/", movieController.getAllMovies)

router.get("/:id", movieController.getMovieById)

router.get("/:title", movieController.getMovieByTitle)

export default router