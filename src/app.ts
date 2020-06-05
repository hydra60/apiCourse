//importaciones
import express, { Request, Response } from "express";
import indexrouter from './routes/route.estudiantes'
import compression from 'compression';
import cors from 'cors'
//inicializacion
const app = express();

//configuraciones
app.set("port", process.env.PORT || 3000);

//midleware (funciones metodos que se ejcutan antes de la peticion)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(compression()); //? comprime las respuestas y etc

//rutas
app.use('/api/estudiante',indexrouter);

export default app;
