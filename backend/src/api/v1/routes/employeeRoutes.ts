import * as employeeController from "../controllers/employeeController";
import express, { Router } from "express";
import { validateRequest } from "../middleware/validation";
import { employeeSchemas } from "../validation/employeeValidation";
const router: Router = express.Router();

router.post("/",
    validateRequest(employeeSchemas.createEmployeeSchema),
    employeeController.createEmployee);
router.get("/",
    employeeController.getAllEmployees);

export default router