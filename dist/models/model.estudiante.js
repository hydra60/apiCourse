"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    ap_pat: String,
    ap_mat: String,
    sexo: { type: Boolean, required: true },
    email: { type: String, required: true, trim: true, unique: true },
    Telefono: { type: Number, unique: true },
    institucion: { type: String, required: true },
    uriAvatar: String,
});
exports.default = mongoose_1.model("estudiantes", schema);
