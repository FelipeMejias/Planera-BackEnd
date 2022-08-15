import { NextFunction, Request, Response } from "express";
import { QueryArrayResult, QueryResult, QueryResultRow } from "pg";
import { userGroupRepository } from "../repositories/userGroupRepository.js";

export async function checkGroupMembership(req:Request,res:Response,next:NextFunction) {
    const groupId=parseInt(req.params.groupId)
    if (!groupId) throw {type:'bad request' , message:'O identificador do grupo não foi enviado'}
    const userId=res.locals.user.id
    const ug:QueryResultRow = await userGroupRepository.findBy_User_Group(groupId,userId)
    if(!ug)throw {type:'unauthorized', message:'Você não pertence a este grupo'}

    next();
}