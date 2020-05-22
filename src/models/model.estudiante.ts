import { Schema,model,Document } from "mongoose";

const schema = new Schema({
    nombre: String,
    ap_pat:String,
    ap_mat:String,
    sexo:Boolean,
    email:String,
    Telefono:Number,
    institucion:String,
    uriAvatar:String
});
interface Iestudiante extends Document{
    nombre: string;
    ap_pat:string;
    ap_mat:string;
    sexo:boolean;
    email:string;
    Telefono:number;
    institucion:string;
    uriAvatar:string;
}

export default model<Iestudiante>('estudiante',schema);