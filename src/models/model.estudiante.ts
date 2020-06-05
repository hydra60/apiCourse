import { Schema, model, Document } from "mongoose";

const schema = new Schema({
    nombre: { type: String, required: true },
    ap_pat: String,
    ap_mat: String,
    sexo: {type:Boolean, required:true},
    email: { type: String, required: true ,trim:true, unique:true},
    Telefono: {type:Number,unique:true},
    institucion: { type: String, required: true },
    uriAvatar: String,
});
interface Iestudiante extends Document {
    nombre: string;
    ap_pat: string;
    ap_mat: string;
    sexo: boolean;
    email: string;
    Telefono: number;
    institucion: string;
    uriAvatar: string;
}

export default model<Iestudiante>("estudiantes", schema);
