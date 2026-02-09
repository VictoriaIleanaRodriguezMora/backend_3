import * as userController from "../controllers/user.controller.js";
import { Router } from "express";

const router = Router();

router.post("/create", userController.createUser); // cuando le pego a esta URL, ejecuta este metodo
router.get("/", userController.getUsers);

export default router;
