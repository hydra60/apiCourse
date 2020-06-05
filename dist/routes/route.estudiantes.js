"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerEst = __importStar(require("../controller/controller.estudiante"));
const router = express_1.Router();
router.get('/', controllerEst.getEstudiantes);
router.get('/:id', controllerEst.getEstudiante);
router.post('/', controllerEst.createEstudiante);
router.put('/:id', controllerEst.updateEst);
router.delete('/:id', controllerEst.deleteUser);
exports.default = router;
