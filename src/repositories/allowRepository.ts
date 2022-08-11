import { prisma } from "../database.js";

async function getColorAllowForUser(color:string,groupId:number,userId:number) {
    return await prisma.allow.findFirst({
        where:{color,groupId,userId}
    })
}

async function upsert(color:string,tag:string,groupId:number,userId:number) {
    const data={color,tag,groupId,userId}
    await prisma.allow.upsert({
        where:{userId_groupId_color:{
            color,groupId,userId
        }},
        update:data,
        create:data
    })
}

async function getHabitsByGroup(groupId:number) {
    const result=await prisma.$queryRaw`
        SELECT h.title , h.begin , h.end , h.floor , h.size , h.day , h."userId" , a.color , a.tag 
        FROM habit h
        JOIN allow a ON a.color=h.color AND a."userId"=h."userId"
        WHERE a."groupId"=${groupId};
    `
    return result
}

async function getGroupAllows(groupId:number,userId:number) {
    return await prisma.allow.findMany({
        where:{groupId,userId}
    })
}

async function erase(id:number) {
    await prisma.allow.delete({
        where:{id}
    })
}

export const allowRepository={
    upsert,getHabitsByGroup,getGroupAllows,getColorAllowForUser,erase
}