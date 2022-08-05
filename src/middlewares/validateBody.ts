import { NextFunction, Request, Response } from "express";

export async function validateBody(schema:any) {
    return (req:Request,res:Response,next:NextFunction)=>{
        const {error}=schema.validate(req.body)
        if(error)throw{type:'bad request'}
        next()
    }
}