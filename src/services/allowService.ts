import { allowRepository } from "../repositories/allowRepository.js";
import { eventRepository } from "../repositories/eventRepository.js";
import { habitRepository } from "../repositories/habitRepository.js";
import { concat_orderByFloor } from "../utils/habitEventUtil.js";

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
    const chosenOnes=habits_events.filter((habit:any)=>chosen.includes(habit.userId))
    return chosenOnes
}

async function getMyAllowsByGroup(groupId:number,userId:number) {
    const allows:any= await allowRepository.getMyAllowsByGroup(groupId,userId)
    return allows
}

export const allowService={
    post,getHabits,getMyAllowsByGroup

}

