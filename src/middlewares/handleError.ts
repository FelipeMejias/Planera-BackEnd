import { NextFunction, Request, Response } from "express";

export async function handleError(error:any,req:Request,res:Response,next:NextFunction){
    const {type,message}=error
    let code=null
    if(type){
        if(type==='not found')code=404
        if(type==='bad request')code=422
        if(type==='unauthorized')code=401
        if(type==='conflict')code=409

        console.log(message)
        return res.status(code).send(message)
    }
    console.log(error)
    res.status(400).send('Nosso servidor está fora do ar')
}