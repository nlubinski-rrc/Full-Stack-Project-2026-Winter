import express, { Router } from "express";
import * as watchlistController from "../controllers/watchlistController";
import { requireAuth } from "@clerk/express";
import { findOrCreateUser } from "../middleware/findOrCreateUser";

const router: Router = express.Router();

router.get("/", requireAuth(), findOrCreateUser, watchlistController.getUserWatchlist);
router.post("/:id", requireAuth(), findOrCreateUser, watchlistController.addToWatchlist);
router.delete("/:id", requireAuth(), findOrCreateUser, watchlistController.removeFromWatchlist);

export default router;
