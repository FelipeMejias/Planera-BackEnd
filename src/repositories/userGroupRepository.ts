import { prisma } from "../database.js";


async function insertCreator(groupId:number,userId:number) {
    await prisma.userGroup.create({
        data:{
            acepted:true,
            groupId,
            userId
        }
    })
}

async function getFirstInvitation(userId:number) {
    return await prisma.userGroup.findFirst({
        include:{
            group:true
        },
        where:{
            userId,acepted:false
        }
    })
}

async function insert(groupId:number,userId:number) {
    await prisma.userGroup.create({
        data:{groupId,userId}
    })
}

async function getGroups(userId:number) {
    return await prisma.userGroup.findMany({
        include:{
            group:true
        },
        where:{
            userId,acepted:true
        }
    })
}

async function getAllInGroup(groupId:number) {
    return await prisma.userGroup.findMany({
        include:{
            group:true,
            user:true
        },
        where:{
            groupId,
            acepted:true
        }
    })
}

async function getPendent(groupId:number) {
    return await prisma.userGroup.findMany({
        include:{
            user:true
        },
        where:{
            groupId,
            acepted:false
        }
    })
}

async function acept(id:number) {
    await prisma.userGroup.update({
        data:{acepted:true},
        where:{id}
    })
}

async function changeColor(color:string,groupId:number,userId:number){
    await prisma.userGroup.update({
        data:{
            color
        },
        where:{
            userId_groupId:{
            groupId,userId
        }}
    })
}

async function eraseById(id:number) {
    await prisma.userGroup.delete({
        where:{
            id
        }
    })
}

async function eraseBy_User_Group(groupId:number,userId:number) {
    await prisma.userGroup.delete({
        where:{
            userId_groupId:{
                groupId,
                userId
            }
        }
    })
}

async function eraseAll(groupId:number) {
    await prisma.userGroup.deleteMany({
        where:{groupId}
    })
}

export const userGroupRepository={
    insertCreator,insert,
    getGroups,getAllInGroup,getFirstInvitation,getPendent,
    acept,changeColor,
    eraseById,eraseBy_User_Group,eraseAll
}