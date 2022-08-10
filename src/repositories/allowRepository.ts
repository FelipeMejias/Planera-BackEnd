import { prisma } from "../database.js";

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
        SELECT h.begin , h.end , h.floor , h.size , h.day , h."userId" , a.color , a.tag 
        FROM habit h
        JOIN allow a ON a.color=h.color AND a."userId"=h."userId"
        WHERE a."groupId"=${groupId};
    `
    return result
}

export const allowRepository={
    upsert,getHabitsByGroup
}