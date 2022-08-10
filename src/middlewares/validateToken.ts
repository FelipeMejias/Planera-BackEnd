import { NextFunction, Request, Response } from "express";
import { sessionRepository } from "../repositories/sessionRepository.js";

export async function validateToken(req:Request,res:Response,next:NextFunction) {
    const {authorization}=req.headers
    if (!authorization) throw {type:'bad request'}
    const token = authorization.replace("Bearer ", "")
    if (!token) throw {type:'bad request'}
    const {user} = await sessionRepository.getByToken(token)
    if(!user)throw {type:'unauthorized'}
    delete user.password
    res.locals.user = user

    console.log(token)
    next();
}