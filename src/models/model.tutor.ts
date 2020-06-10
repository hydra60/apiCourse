import { Schema, model, Document } from "mongoose";

const schema = new Schema({
    nombre : {type:String},
    ape_pat : {type:String},
    nickname:{type:String,require:true},
    ape_mat : {type:String},
    rol:[{type:String}],
	cursos : [
		{
			nombre : {type:String},
			horario : [
				{
					dia : {type:String},
					hora_ini : {type:String},
					hora_fin : {type:String}
				}
			]
		}
	]
});

interface ITutor extends Document{
    nombre : string,
	ape_pat : string,
    ape_mat : string,
    rol:[string],
	cursos : [
		{
			nombre : string,
			horario : [
				{
					dia : string,
					hora_ini : string,
					hora_fin : string
				}
			]
		}
	]
}
export default model<ITutor>("tutores", schema);