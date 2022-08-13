import { Request, Response } from "express";
import { habitService } from "../services/habitService.js";

async function post(req:Request,res:Response) {
    const {user}=res.locals
    const data=req.body
    await habitService.post(data,user.id)
    res.sendStatus(201)
}

async function get(req:Request,res:Response) {
    const {user}=res.locals
    const response=await habitService.get(user.id)
    res.status(200).send(response)
}

async function put(req:Request,res:Response) {
    const id=parseInt(req.params.id)
    const data=req.body
    await habitService.put(data,id)
    res.sendStatus(200)
}

async function erase(req:Request,res:Response) {
    const id=parseInt(req.params.id)
    await habitService.erase(id)
    res.sendStatus(200)
}

export const habitController={
    post,get,put,erase
}