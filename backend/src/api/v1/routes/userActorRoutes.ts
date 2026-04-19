import express, { Router } from "express";
import * as userActorController from "../controllers/userActorController";
import { findOrCreateUser } from "../middleware/findOrCreateUser";
import { requireAuth } from "@clerk/express";

const router: Router = express.Router();

// "/api/v1/actors" prefixes all below routes

router.post(
    "/:actorId/favourite",
    requireAuth(),
    findOrCreateUser,
    userActorController.createUserActor
);

router.delete(
    "/:actorId/favourite",
    requireAuth(),
    findOrCreateUser,
    userActorController.deleteUserActor
);

export default router;