import { Request, Response } from "express";
import { allowService } from "../services/allowService.js";

async function post(req:Request,res:Response) {
    const data=req.body
    const {user}=res.locals
    const groupId=parseInt(req.params.groupId)
    await allowService.post(data,groupId,user.id)
    res.sendStatus(201)
}

async function get(req:Request,res:Response) {
    const groupId=parseInt(req.params.groupId)
    const {chosen}=req.body
    const response=await allowService.get(groupId,chosen)
    res.status(200).send(response)
}

export const allowController={
    post,get
}