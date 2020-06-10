import { Request,Response } from "express";
import tutores from '../models/model.tutor';

export async function getTutor(req:Request,res:Response):Promise<Response>{
    console.log(req.params.id);
    const data = await tutores.find({_id:req.params.id});
    return res.status(200).json(data);

}
export async function getTutores(req:Request,res:Response):Promise<Response>{
    const data = await tutores.find();
    return res.status(200).json(data);

}
export async function insertTutor(req:Request, res:Response):Promise<Response>{
    const tutor = req.body;
    console.log(tutor);
    if(!tutor || Object.keys(tutor).length <5){
        return res.status(200).json({
            meesage : "parametros imcompletos",
        });
    }
    const newTutor = new tutores(tutor);
    console.log("**************");
    console.log(newTutor);
    
    const tuto = await newTutor.save().catch(
        (err)=>{
            if(err) return res.status(400).json(
                {
                    message : "error al guardar los datos",
                    err : err.keyValue
                }
            );
            res.status(200).json({
                message:"tutor creado con exito",
                tutor: newTutor                
            });
        }
    );
    return res.status(200).json({message:"recive",tuto});
}
export async function updateTutor(req:Request,res:Response):Promise<Response>{
    console.log(req.params.id);
    const tutorReq = req.body;
    console.log(tutorReq);
    const updateTutor = await tutores.findByIdAndUpdate({_id:req.params.id},tutorReq,{new: true}).catch(
        (err)=>{
            if(err)
                return res.status(400).json(
                    {
                        message:"error al actualizar",
                        err: err.keyValue
                    }
                );
            return res.status(200).json({
                message: "datos actualizados",
            })
        });

    return res.status(200).json({
        message: "datos actualizados",
        data: updateTutor
    });

}
export async function delTutor(req:Request,res:Response):Promise<Response>{
    console.log(req.params.id);
    const { id } = req.params;
    const delTutor = await tutores.findByIdAndDelete({_id:id}).catch(
        (err)=>{
            if(err)
                return res.status(400).json({
                    message: "error al eliminar",
                    err: err.keyValue
                });
        }
    );

    if(!delTutor){
        return res.status(400).json({message:"surgio un error al eliminar"});
    }
    return res.status(200).json({message:"Se elimino con exito",data_eliminada:delTutor});
}


