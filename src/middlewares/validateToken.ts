import { NextFunction, Request, Response } from "express";
import { sessionRepository } from "../repositories/sessionRepository.js";

export async function validateToken(req:Request,res:Response,next:NextFunction) {
    const {authorization}=req.headers
    if (!authorization) throw {type:'bad request', message:'O identificador do usuário não foi enviado'}
    const token = authorization.replace("Bearer ", "")
    if (!token) throw {type:'bad request', message:'Token não identificado'}
    const session = await sessionRepository.getByToken(token)
    if(!session)throw {type:'unauthorized', message:'Você não está logado. Vá ao menu e clique em LogOut para logar novamente'}
    const {user}=session
    delete user.password
    res.locals.user = user

    next();
}