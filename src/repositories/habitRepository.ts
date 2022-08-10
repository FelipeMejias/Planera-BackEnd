import { prisma } from "../database.js";

async function post(data:any,userId:number) {
    await prisma.habit.create({
        data:{...data,userId}
    })
}

async function get(userId:number) {
    return await prisma.habit.findMany({
        where:{userId}
    })
}

async function put(data:any,id:number) {
    await prisma.habit.update({
        data,
        where:{id}
    })
}


async function erase(id:number) {
    await prisma.habit.delete({
        where:{id}
    })
}


export const habitRepository={
    post,get,put,erase
}