"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_estudiante_1 = require("../controller/controller.estudiante");
const router = express_1.Router();
router.route('/')
    .get(controller_estudiante_1.helloWorld);
exports.default = router;
