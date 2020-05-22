"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    nombre: String,
    ap_pat: String,
    ap_mat: String,
    sexo: Boolean,
    email: String,
    Telefono: Number,
    institucion: String,
    uriAvatar: String
});
exports.default = mongoose_1.model('estudiante', schema);
