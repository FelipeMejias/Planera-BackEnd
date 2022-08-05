import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { userRepository } from "../repositories/userRepository.js";

export async function validateToken(req:Request,res:Response,next:NextFunction) {
    const {authorization}=req.headers
    if (!authorization) throw {type:'bad request'}

    const token = authorization.replace("Bearer ", "")
    if (!token) throw {type:'bad request'}

    try {
        const { userId } = jwt.verify(token, process.env.JWT_SECRET) as {userId: number;};
        const user = await userRepository.findById(userId);
        res.locals.user = user;
        next();
    } catch {
        throw {type:'unauthorized'}
    }
}