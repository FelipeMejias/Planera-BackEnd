import { prisma } from "../database.js";

async function post(data:any,userId:number) {
    await prisma.group.create({
        data
    })
}

async function findByName(name:string) {
    return await prisma.group.findFirst({
        where:{name}
    })
}

async function erase(id:number) {
    await prisma.group.delete({
        where:{id}
    })
}

export const groupRepository={
    post,findByName,erase
}