import { prisma } from "../database.js";

async function insertMany(data:any) {
    await prisma.userEvent.createMany({data})
}

async function get(userId:number) {
    return await prisma.$queryRaw`
        SELECT e.* , ug.color, ug.color
        FROM "userEvent" ue
        JOIN event e ON e.id=ue."eventId"
        JOIN "userGroup" ug ON ug."groupId"=e."groupId" AND ug."userId"=${userId}
        WHERE ue."userId"=${userId}
        ORDER BY e.floor
        ;
    `
}

export const userEventRepository={
    insertMany,get
}