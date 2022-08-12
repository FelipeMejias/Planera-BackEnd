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

async function getHabitsByGroup(groupId:number) {
    return await prisma.$queryRaw`
        SELECT h.title , h.begin , h.end , h.floor , h.size , h.day , h."userId" , a.color , a.tag 
        FROM habit h
        JOIN allow a ON a.color=h.color AND a."userId"=h."userId"
        WHERE a."groupId"=${groupId};
    `
}

export const habitRepository={
    post,get,put,erase,getHabitsByGroup
}