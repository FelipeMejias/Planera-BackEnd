import { prisma } from "../database.js";

async function insertMany(data:any) {
    await prisma.userEvent.createMany({data})
}

async function erase(userId:number,eventId:number) {
    await prisma.userEvent.delete({
        where:{
            userId_eventId:{
                userId,eventId
            }
        }
    })
}

async function getAllInEvent(eventId:number) {
    return await prisma.userEvent.findMany({
        include:{
            user:true
        },
        where:{
            eventId
        }
    })
}

export const userEventRepository={
    insertMany,erase,getAllInEvent
}