import { prisma } from "../database.js";
import { ChangeHabitData, HabitData } from "../services/habitService.js";

export type GraphicData={
    title:string;
    day :number;
    begin:string;
    end:string;
    floor:number;
    size:number;
}

async function post(data:GraphicData,userId:number) {
    await prisma.habit.create({
        data:{...data,userId}
    })
}

async function findById(id:number){
    return await prisma.habit.findUnique({
        where:{id}
    })
}

async function get(userId:number) {
    return await prisma.habit.findMany({
        where:{userId},
        orderBy:{floor:'asc'}
    })
}

async function put(data:ChangeHabitData,id:number) {
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
        SELECT h.title , h.begin , h.end , h.floor , h.size , h.day  , a.color , a.tag , h."userId"
        FROM habit h
        JOIN allow a ON a.color=h.color AND a."userId"=h."userId"
        WHERE a."groupId"=${groupId}
        ORDER BY h.floor
        ;
    `
}

export const habitRepository={
    post,get,put,erase,getHabitsByGroup,findById
}