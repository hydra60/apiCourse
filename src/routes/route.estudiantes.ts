import { Router } from "express";
import { helloWorld } from "../controller/controller.estudiante";
const router = Router();


router.route('/')
    .get(helloWorld);

export default router;