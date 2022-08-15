import { prisma } from "../database.js";

 type GraphicEventData={
    title:string;
    begin:string;
    end:string;
    day:number;
    floor:number;
    size:number;
    groupId:number;
}


async function post(data:GraphicEventData) {
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

async function getMyEvents(userId:number) {
    return await prisma.$queryRaw`
        SELECT e.* , ug.color
        FROM "userEvent" ue
        JOIN event e ON e.id=ue."eventId"
        JOIN "userGroup" ug ON ug."groupId"=e."groupId" AND ug."userId"=${userId}
        WHERE ue."userId"=${userId}
        ORDER BY e.floor
        ;
    `
}

async function getEventsByGroup(groupId:number) {
    return await prisma.$queryRaw`
        SELECT e.* , ug1.color , a.tag, ue."userId" 
        FROM event e
        JOIN "userEvent" ue ON ue."eventId"=e.id
        
        JOIN "userGroup" ug1 ON ug1."userId"=ue."userId" AND ug1."groupId"=e."groupId"
        JOIN "userGroup" ug2 ON ug2."userId"=ue."userId" AND ug2."groupId"=${groupId}
        JOIN allow a ON a.color=ug2.color AND a."userId"=ue."userId" AND a."groupId"=${groupId}
        ORDER BY e.floor
    ;`
}

async function erase(id:number) {
    await prisma.event.delete({
        where:{
            id
        }
    })
}

export const eventRepository={
    post,findBy_groupId_title,getEventsByGroup,getMyEvents,erase
}