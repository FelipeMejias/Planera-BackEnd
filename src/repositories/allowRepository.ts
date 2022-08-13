import { prisma } from "../database.js";

async function getMyColorAllowByGroup(color:string,groupId:number,userId:number) {
    return await prisma.allow.findUnique({
        where:{
            userId_groupId_color:{
                color,groupId,userId
            }
        }
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

async function getMyAllowsByGroup(groupId:number,userId:number) {
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
    upsert,
    getMyAllowsByGroup,getMyColorAllowByGroup,
    erase
}