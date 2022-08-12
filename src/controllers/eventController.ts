import { Request, Response } from "express";
import { eventService } from "../services/eventService.js";

async function post(req:Request,res:Response) {
    const data=req.body
    const groupId=parseInt(req.params.groupId)
    await eventService.post(data,groupId)
    res.sendStatus(201)
}

async function get(req:Request,res:Response) {
    const {id:userId}=res.locals.user
    const response=await eventService.getUserEvents(userId)
    res.status(200).send(response)
}

export const eventController={
    post,get
}