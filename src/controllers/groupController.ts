import { Request, Response } from "express";
import { groupService } from "../services/groupService.js";

async function post(req:Request,res:Response) {
    const data=req.body
    const {id}=res.locals.user
    await groupService.post(data,id)
    res.sendStatus(201)
}
async function getAll(req:Request,res:Response) {
    const {id}=res.locals.user
    const response=await groupService.getAll(id)
    res.status(200).send(response)
}
async function get(req:Request,res:Response) {
    const {id}=req.params
    const response=await groupService.get(parseInt(id))
    res.status(200).send(response)
}

export const groupController={
    post,getAll,get
}