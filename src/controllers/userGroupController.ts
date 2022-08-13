import { Request, Response } from "express";
import { userGroupService } from "../services/userGroupService.js";

async function post(req:Request,res:Response) {
    const {guest}=req.body
    const {groupId}=req.params
    await userGroupService.addMember(parseInt(groupId),guest)
    res.sendStatus(201)
}

async function getMyGroups(req:Request,res:Response) {
    const {id}=res.locals.user
    const response=await userGroupService.get(id)
    res.status(200).send(response)
}

async function getPendent(req:Request,res:Response) {
    const groupId=parseInt(req.params.groupId)
    const response=await userGroupService.getPendent(groupId)
    res.status(200).send(response)
}

async function changeColor(req:Request,res:Response) {
    const {id:userId}=res.locals.user
    const groupId=parseInt(req.params.groupId)
    const {color}=req.body
    await userGroupService.changeColor(color,groupId,userId)
    res.sendStatus(200)
}

async function acept(req:Request,res:Response) {
    const {id:userId}=res.locals.user
    const invitationId=parseInt(req.params.id)
    await userGroupService.acept(invitationId,userId)
    res.sendStatus(200)
}
async function reject(req:Request,res:Response) {
    const {id:userId}=res.locals.user
    const invitationId=parseInt(req.params.id)
    await userGroupService.reject(invitationId,userId)
    res.sendStatus(200)
}

async function erase(req:Request,res:Response) {
    const {id:userId}=res.locals.user
    const groupId=parseInt(req.params.groupId)
    await userGroupService.exitGroup(groupId,userId)
    res.sendStatus(200)
}

export const userGroupController={
    post,getMyGroups,changeColor,getPendent,acept,reject,erase
}