import { Request, Response } from "express";
import { habitService } from "../services/habitService.js";

async function post(req:Request,res:Response) {
    const {userId}=res.locals
    const data=req.body
    await habitService.post(data,userId)
    res.sendStatus(201)
}

async function get(req:Request,res:Response) {
    const {userId}=res.locals
    const response=await habitService.get(userId)
    res.status(200).send(response)
}

export const habitController={
    post,get
}