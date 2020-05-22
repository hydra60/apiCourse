import {Response,Request }from 'express';

export function helloWorld( req:Request,res:Response) :Response{
    return res.send("hola we");
}