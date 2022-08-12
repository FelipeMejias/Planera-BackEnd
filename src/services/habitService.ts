import { Habit } from "@prisma/client";
import { habitRepository } from "../repositories/habitRepository.js";
import { graphicMark } from "../utils/graphicConverter.js";

export type HabitData={
    title:string;
    day :number;
    begin:string;
    end:string;
}

async function post(data:HabitData,userId:number) {
    const graphicData=graphicMark(data)
    await habitRepository.post(graphicData,userId)
}

async function get(userId:number) {
    return await habitRepository.get(userId)
}

async function put(data:any,userId:number,id:number) {
    const {begin,end}=data
    let finalData=data
    if(begin || end)finalData=graphicMark(data)
    await habitRepository.put(finalData,id)
}

async function erase(userId:number,id:number) {
    await habitRepository.erase(id)
}


export const habitService={
    post,get,put,erase
}

