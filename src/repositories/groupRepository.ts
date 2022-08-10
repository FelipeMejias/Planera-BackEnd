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



export const groupRepository={
    post,findByName
}