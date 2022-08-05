import { prisma } from "../database.js";
import { HabitData } from "../services/habitService.js";

async function post(data:HabitData,userId:number) {
    await prisma.habit.create({
        data:{...data,userId}
    })
}

async function get(userId:number) {
    return await prisma.habit.findMany({
        where:{userId}
    })
}


export const habitRepository={
    post,get
}