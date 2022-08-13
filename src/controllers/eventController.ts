import { Request, Response } from "express";
import { eventService } from "../services/eventService.js";

async function post(req:Request,res:Response) {
    const data=req.body
    const groupId=parseInt(req.params.groupId)
    await eventService.post(data,groupId)
    res.sendStatus(201)
}

async function getMyEvents(req:Request,res:Response) {
    const {id:userId}=res.locals.user
    const response=await eventService.getUserEvents(userId)
    res.status(200).send(response)
}

async function erase(req:Request,res:Response) {
    const {id:userId}=res.locals.user
    const {id:eventId}=req.params
    await eventService.eraseUserEvent(userId,parseInt(eventId))
    res.sendStatus(200)
}

async function getParticipants(req:Request,res:Response) {
    const {id:eventId}=req.params
    const response=await eventService.getParticipants(parseInt(eventId))
    res.status(200).send(response)
}

export const eventController={
    post,getMyEvents,erase,getParticipants
}