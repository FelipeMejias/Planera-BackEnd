import { Habit } from "@prisma/client";
import { habitRepository } from "../repositories/habitRepository.js";

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

function graphicMark(habit:HabitData){
    const {begin,end}=habit
    const graphBegin=Math.round(convertTime(begin))
    const graphEnd=Math.round(convertTime(end))
    const distance=graphEnd-graphBegin
    if(distance<=0)throw{type:'bad request'}
    return {...habit,
        begin:formatTime(begin),
        end:formatTime(end),
        floor:graphBegin*100,
        size:(distance)*100
    }
}

function formatTime(str:string){
    const len = str.length
    if(len===5)return str[0]+str[1]+':'+str[3]+str[4]
    if(len===4)return str[0]+':'+str[2]+str[3]
    if(len===2)return str[0]+str[1]+':00'
    if(len===1)return str[0]+':00'
}

function convertTime(str:string){
    const len = str.length
    if(len===5)return parseInt(str[0]+str[1])+parseInt(str[3]+str[4])/60
    if(len===4)return parseInt(str[0])+parseInt(str[2]+str[3])/60
    if(len===2)return parseInt(str[0]+str[1])
    if(len===1)return parseInt(str[0])
}

