import { Router } from "express";
import * as controllerEst from "../controller/controller.estudiante";
const router = Router();


router.get('/',controllerEst.getEstudiantes);
router.get('/:id',controllerEst.getEstudiante);
router.post('/',controllerEst.createEstudiante);
router.put('/:id',controllerEst.updateEst);
router.delete('/:id',controllerEst.deleteUser);
export default router;