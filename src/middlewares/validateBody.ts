import { NextFunction, Request, Response } from "express";
import { throwTimePatternError, translate } from "../utils/time_lenguage.js";

export  function validateBody(schema:any) {
    return async(req:Request,res:Response,next:NextFunction)=>{
        const {error}=schema.validate(req.body)
        if(error){
            const label=error.details[0].context.label
            console.log(error)
            if(label==='end'||label==='begin')throwTimePatternError()
            throw{type:'bad request',message:`Complete correctly the field:: ${label}`}
        }
        
        next()
    }
}




