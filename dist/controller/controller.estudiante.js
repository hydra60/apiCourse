"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_estudiante_1 = __importDefault(require("../models/model.estudiante"));
function getEstudiantes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield model_estudiante_1.default.find();
        return res.json(data);
    });
}
exports.getEstudiantes = getEstudiantes;
function getEstudiante(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const data = yield model_estudiante_1.default.find({ _id: id });
        return res.json(data);
    });
}
exports.getEstudiante = getEstudiante;
function createEstudiante(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const estu = req.body;
        if (!estu || Object.keys(estu).length < 7)
            return res.send({
                status: 400,
                meesage: "parametros incompletos",
                err: "parametros incompletos"
            });
        //const newEst = new estudiantes({nombre,ap_pat,ap_mat,sexo,email,Telefono,institucion,uriAvatar});
        const newEst = new model_estudiante_1.default(estu);
        const est = yield newEst.save().catch((err) => {
            if (err)
                return res.send({
                    status: 400,
                    meesage: "error al guardar ya existe el dato...",
                    err: err.keyValue,
                });
            res.send({ message: "estudiante creado", estudiante: newEst });
        });
        return res.status(200).json({ message: "recive", newEst });
    });
}
exports.createEstudiante = createEstudiante;
function updateEst(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const estu = req.body;
        const newEst = yield model_estudiante_1.default.findOneAndUpdate({ _id: req.params.id }, estu, { new: true }).catch((err) => {
            //console.log(err);
            if (err)
                return res.send({
                    status: 400,
                    meesage: "error al actualizar...",
                    err: err.keyValue,
                });
            return res.send({ message: "estudiante actualizado" });
        });
        return res.status(200).json({ message: "estudiante actualizado...", data: newEst });
    });
}
exports.updateEst = updateEst;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const delEst = yield model_estudiante_1.default.findByIdAndDelete({ _id: id }).catch((err) => {
            if (err)
                return res.send({
                    status: 400,
                    meesage: "error al eliminar...",
                    err: err.keyValue,
                });
        });
        if (!delEst) {
            return res.send({
                status: 400,
                meesage: "error al eliminar dato no encontrado...",
            });
        }
        return res.send("delete correct");
    });
}
exports.deleteUser = deleteUser;
