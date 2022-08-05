import { Habit } from "@prisma/client";
import { habitRepository } from "../repositories/habitRepository.js";

export type HabitData={
    title:string;
    day :number;
    begin:string;
    end:string;
}

async function post(data:HabitData,userId:number) {
    await habitRepository.post(data,userId)
}

async function get(userId:number) {
    const habits=await habitRepository.get(userId)
    const habitsGraphical=habits.map(addGraphicalMarks)
    return habitsGraphical
}

function addGraphicalMarks(habit:Habit){
    return habit
}

export const habitService={
    post,get
}