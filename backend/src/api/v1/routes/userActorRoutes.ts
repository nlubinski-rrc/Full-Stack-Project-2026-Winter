import express, { Router } from "express";
import * as userActorController from "../controllers/userActorController";
import { findOrCreateUser } from "../middleware/findOrCreateUser";
import { requireAuth } from "@clerk/express";

const router: Router = express.Router();

router.post(
    "/actors/:actorId/favourite",
    requireAuth(),
    findOrCreateUser,
    userActorController.createUserActor
);

router.delete(
    "/actors/:actorId/favourite",
    requireAuth(),
    findOrCreateUser,
    userActorController.deleteUserActor
);

export default router;