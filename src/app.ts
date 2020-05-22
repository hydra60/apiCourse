//importaciones
import express, { Request, Response } from "express";
import indexrouter from './routes/route.estudiantes'
//inicializacion
const app = express();

//configuraciones
app.set("port", process.env.PORT || 3000);

//midleware (funciones metodos que se ejcutan antes de la peticion)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//rutas
app.use('/api',indexrouter);

export default app;
