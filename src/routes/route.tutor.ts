import { Router } from "express";
import * as controllerEst from "../controller/controlle.tutor";
const router = Router();

router.get('/',controllerEst.getTutores);
router.get('/:id',controllerEst.getTutor);
router.post('/',controllerEst.insertTutor);
router.put('/:id',controllerEst.updateTutor);
router.delete('/:id',controllerEst.delTutor);
export default router;