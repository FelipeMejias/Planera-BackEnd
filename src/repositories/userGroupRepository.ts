import { prisma } from "../database.js";

async function insertCreator(groupId:number,userId:number) {
    await prisma.userGroup.create({
        data:{groupId,userId,acepted:true}
    })
}

async function getFirstInvitation(userId:number) {
    return await prisma.userGroup.findFirst({
        include:{group:true},
        where:{userId,acepted:false}
    })
}

async function insert(groupId:number,guestId:number) {
    await prisma.userGroup.create({
        data:{groupId,userId:guestId,acepted:false}
    })
}

async function getGroups(userId:number) {
    return await prisma.userGroup.findMany({
        include:{group:true},
        where:{userId,acepted:true}
    })
}

async function getAllInGroup(groupId:number) {
    return await prisma.userGroup.findMany({
        include:{group:true,user:true},
        where:{groupId,acepted:true}
    })
}

async function acept(invitationId:number) {
    await prisma.userGroup.update({
        data:{acepted:true},
        where:{id:invitationId}
    })
}

async function changeColor(color:string,groupId:number,userId:number){
    await prisma.userGroup.update({
        data:{
            color
        },
        where:{userId_groupId:{
            groupId,userId
        }}
    })
}

async function eraseById(invitationId:number) {
    await prisma.userGroup.delete({
        where:{id:invitationId}
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
    getGroups,getAllInGroup,getFirstInvitation,
    acept,changeColor,
    eraseById,eraseBy_User_Group,eraseAll
}