import express, { Router } from "express";
import * as watchlistController from "../controllers/watchlistController";

const router: Router = express.Router();

router.get("/", watchlistController.getWatchlist);
router.post("/", watchlistController.addToWatchlist);
router.delete("/:id", watchlistController.removeFromWatchlist);

export default router;