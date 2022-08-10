import { allowRepository } from "../repositories/allowRepository.js";

export type AllowData={
    color:string;
    tag:string
}

async function post(data:AllowData,groupId:number,userId:number) {
    const {color,tag}=data
    await allowRepository.upsert(color,tag,groupId,userId)
}

async function get(groupId:number,chosen:number[]) {
    console.log(groupId,chosen)
    const habits:any= await allowRepository.getHabitsByGroup(groupId)
    console.log(habits)
    const chosenHabits=habits.filter((habit:any)=>chosen.includes(habit.userId))
    return chosenHabits
}

export const allowService={
    post,get
}

