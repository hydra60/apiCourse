"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones
const express_1 = __importDefault(require("express"));
const route_estudiantes_1 = __importDefault(require("./routes/route.estudiantes"));
//inicializacion
const app = express_1.default();
//configuraciones
app.set("port", process.env.PORT || 3000);
//midleware (funciones metodos que se ejcutan antes de la peticion)
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
//rutas
app.use('/api', route_estudiantes_1.default);
exports.default = app;
