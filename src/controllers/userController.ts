import { Request, Response } from "express";
import { userService } from "../services/userService.js";

async function signUp(req:Request,res:Response) {
    const data=req.body
    await userService.signUp(data)
    res.sendStatus(201)
}

async function signIn(req:Request,res:Response) {
    const data=req.body
    const response=await userService.signIn(data)
    res.status(200).send(response)
}

export const userController={
    signUp,signIn
}