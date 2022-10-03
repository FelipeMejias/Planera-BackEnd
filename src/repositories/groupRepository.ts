import { prisma } from "../database.js";

async function post(data:any) {
    await prisma.group.create({
        data
    })
}

async function findByNameAndCreator(name:string,creatorId:number) {
    return await prisma.group.findFirst({
        where:{name,creatorId}
    })
}

async function erase(id:number) {
    await prisma.group.delete({
        where:{id}
    })
}

export const groupRepository={
    post,findByNameAndCreator,erase
}