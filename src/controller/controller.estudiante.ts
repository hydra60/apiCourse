import {Response,Request, json }from 'express';
import estudiantes from '../models/model.estudiante';

export async function getEstudiantes( req:Request,res:Response) :Promise<Response>{
    const data = await estudiantes.find();
    return res.json(data); 
}

export async function getEstudiante(req:Request, res: Response) :Promise<Response>{
    const id = req.params.id;
    const data = await estudiantes.find({_id:id});
    return res.json(data); 

}
export async function createEstudiante(req:Request,res:Response):Promise<Response>{
        const estu = req.body;
        
        if (!estu || Object.keys(estu).length < 7)
        return res.send( {
            status:400, 
            meesage:"parametros incompletos", 
            err: "parametros incompletos"
        });
        
        //const newEst = new estudiantes({nombre,ap_pat,ap_mat,sexo,email,Telefono,institucion,uriAvatar});
        const newEst = new estudiantes(estu);
        const est = await newEst.save().catch(
            (err) => {
                if (err ) return res.send( {
                    status:400, 
                    meesage:"error al guardar ya existe el dato...", 
                    err: err.keyValue,
                });
                res.send({ message:"estudiante creado",  estudiante: newEst });
            }
        );
        return res.status(200).json({message:"recive",newEst});    
}

export async function updateEst(req:Request,res:Response):Promise<Response>{
    const estu = req.body;
    const newEst=await estudiantes.findOneAndUpdate({_id:req.params.id},estu,{new:true}).catch((err)=>{
        //console.log(err);
        if (err) 
        return res.send( {
            status:400, 
            meesage:"error al actualizar...", 
            err: err.keyValue,
        });
        return res.send({ message:"estudiante actualizado" });
        
    });
    return res.status(200).json({message:"estudiante actualizado...",data:newEst});
}
export async function deleteUser(req:Request, res:Response):Promise<Response>{
    const { id} =req.params;
    const delEst = await estudiantes.findByIdAndDelete({_id:id}).catch(
        (err)=>{
            if (err) 
                return res.send( {
                    status:400, 
                    meesage:"error al eliminar...", 
                    err: err.keyValue,
                });

        });
    if(!delEst){
        return res.send( {
            status:400, 
            meesage:"error al eliminar dato no encontrado...", 
        });
    }
    return res.send("delete correct");
}