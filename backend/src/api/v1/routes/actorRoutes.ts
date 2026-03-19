import express, { Router } from "express";
import * as actorController from "../controllers/actorControllers"

const router: Router = express.Router();

// "/api/v1/actors" prefixes all below routes

router.get(
    "/",
    actorController.getAllActors
);

router.get(
    "/:id",
    actorController.getActorById
);

router.post(
    "/",
    actorController.createActor
);

router.put(
    "/:id",
    actorController.updateActor
);

router.delete(
    "/:id",
    actorController.deleteActor
);

export default router;
