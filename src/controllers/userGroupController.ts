import { Request, Response } from "express";
import { userGroupService } from "../services/userGroupService.js";

async function post(req:Request,res:Response) {
    const {guest}=req.body
    const {groupId}=req.params
    await userGroupService.post(parseInt(groupId),guest)
    res.sendStatus(201)
}

async function get(req:Request,res:Response) {
    const {id}=res.locals.user
    const response=await userGroupService.get(id)
    res.status(200).send(response)
}

async function put(req:Request,res:Response) {
    const {id:userId}=res.locals.user
    const invitationId=parseInt(req.params.id)
    await userGroupService.put(invitationId,userId)
    res.sendStatus(200)
}
async function erase(req:Request,res:Response) {
    const {id:userId}=res.locals.user
    const invitationId=parseInt(req.params.id)
    await userGroupService.erase(invitationId,userId)
    res.sendStatus(200)
}
export const userGroupController={
    post,get,put,erase
}