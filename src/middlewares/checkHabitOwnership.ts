import { NextFunction, Request, Response } from "express";
import { QueryResultRow } from "pg";
import { habitRepository } from "../repositories/habitRepository.js";

export async function checkHabitOwnership(req:Request,res:Response,next:NextFunction) {
    const id=parseInt(req.params.id)
    if (!id) throw {type:'bad request'}
    const userId=res.locals.user.id
    const habit:QueryResultRow = await habitRepository.findById(id)
    if(!habit)throw {type:'not found'}
    if(habit.userId!==userId) throw {type:'unauthorized'}

    next();
}