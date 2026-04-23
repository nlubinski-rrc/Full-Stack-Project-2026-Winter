import express, { Router } from "express";
import * as actorController from "../controllers/actorControllers"
import { findOrCreateUser } from "../middleware/findOrCreateUser";

const router: Router = express.Router();

// "/api/v1/actors" prefixes all below routes

router.get(
    "/",
    findOrCreateUser,
    actorController.getAllActors
);

router.get(
    "/:id",
    findOrCreateUser,
    actorController.getActorById
);

// router.post(
//     "/",
//     actorController.createActor
// );

// FAVOURITE ACTORS NOW HANDLED BY UserActor
//
// router.put(
//     "/:id",
//     actorController.updateActor
// );

// router.delete(
//     "/:id",
//     actorController.deleteActor
// );

export default router;
