import { allowRepository } from "../repositories/allowRepository.js";

export type AllowData={
    color:string;
    tag:string
}

async function post(data:AllowData,groupId:number,userId:number) {
    const {color,tag}=data
    if(!tag){
        const allow=await allowRepository.getColorAllowForUser(color,groupId,userId)
        if(allow)return await allowRepository.erase(allow.id)
    }
    await allowRepository.upsert(color,tag,groupId,userId)
}

async function getHabits(groupId:number,chosen:number[]) {
    const habits:any= await allowRepository.getHabitsByGroup(groupId)
    console.log(habits)
    const chosenHabits=habits.filter((habit:any)=>chosen.includes(habit.userId))
    return chosenHabits
}

async function getAllows(groupId:number,userId:number) {
    const allows:any= await allowRepository.getGroupAllows(groupId,userId)
    return allows
}

export const allowService={
    post,getHabits,getAllows

}

