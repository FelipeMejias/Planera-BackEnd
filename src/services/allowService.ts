import { QueryResultRow } from "pg";
import { allowRepository } from "../repositories/allowRepository.js";
import { eventRepository } from "../repositories/eventRepository.js";
import { habitRepository } from "../repositories/habitRepository.js";
import { concat_orderByFloor } from "../utils/time_lenguage.js";

export type AllowData={
    color:PossibleColors;
    tag?:string
}

type PossibleColors='red'|'yellow'|'green'|'blue'|'purple'|'orange'|'pink'|'aqua'


async function post(data:AllowData,groupId:number,userId:number) {
    const {color,tag}=data
    if(!tag){
        const allow=await allowRepository.getMyColorAllowByGroup(color,groupId,userId)
        if(allow)return await allowRepository.erase(allow.id)
    }
    await allowRepository.upsert(color,tag,groupId,userId)
}

async function getHabits(groupId:number,chosen:number[]) {
    const habits:any= await habitRepository.getHabitsByGroup(groupId)
    const events:any= await eventRepository.getEventsByGroup(groupId)
    const habits_events=concat_orderByFloor(habits,events)
    if(chosen.length===0)return habits_events
    const chosenOnes=habits_events.filter((habit:QueryResultRow)=>chosen.includes(habit.userId))
    return chosenOnes
}

async function getMyAllowsByGroup(groupId:number,userId:number) {
    return await allowRepository.getMyAllowsByGroup(groupId,userId)
}

export const allowService={
    post,getHabits,getMyAllowsByGroup

}

