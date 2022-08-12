import { prisma } from "../database.js";

async function post(data:any) {
    await prisma.event.create({
        data
    })
}

async function findBy_groupId_title(title:string,groupId:number) {
    return await prisma.event.findUnique({
        where:{groupId_title:{
            title,groupId
        }}
    })
}

async function getEventsByGroup(groupId:number) {
    return await prisma.$queryRaw`
        SELECT e.title , e.begin , e.end , e.floor , e.size , e.day  , ug1.color , a.tag , ue."userId"
        FROM event e
        JOIN "userEvent" ue ON ue."eventId"=e.id
        JOIN "userGroup" ug1 ON ug1."userId"=ue."userId" AND ug1."groupId"=e."groupId"
        JOIN "userGroup" ug2 ON ug2."userId"=ue."userId" AND ug2."groupId"=${groupId}
        JOIN allow a ON a.color=ug2.color AND a."userId"=ue."userId" AND a."groupId"=${groupId}
    ;`
}

export const eventRepository={
    post,findBy_groupId_title,getEventsByGroup
}