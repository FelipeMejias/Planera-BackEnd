import { NextFunction, Request, Response } from "express";
import { userGroupRepository } from "../repositories/userGroupRepository.js";

export async function checkGroupMembership(req:Request,res:Response,next:NextFunction) {
    const groupId=parseInt(req.params.groupId)
    if (!groupId) throw {type:'bad request'}
    const userId=res.locals.user.id
    const ug:any = await userGroupRepository.findBy_User_Group(groupId,userId)
    if(!ug)throw {type:'unauthorized'}

    next();
}