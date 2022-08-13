import { QueryResultRow } from "pg"
import { groupRepository } from "../repositories/groupRepository.js"
import { userGroupRepository } from "../repositories/userGroupRepository.js"
import { userRepository } from "../repositories/userRepository.js"

export type GroupColors='orange'|'pink'|'aqua'

async function addMember(groupId:number,guest:string) {
    const user= await userRepository.findByName(guest)
    if(!user)throw {type:'not found'}
    await userGroupRepository.insert(groupId,user.id)
}

async function get(userId:number) {
    const invitation= await userGroupRepository.getFirstInvitation(userId)
    if(!invitation)return {}
    const {id,group}=invitation
    return {groupName:group.name,invitationId:id}
}

async function getPendent(groupId:number) {
    const pendents= await userGroupRepository.getPendent(groupId)
    const pendentNames=pendents.map((ug:QueryResultRow)=>(ug.user.name))
    return pendentNames
}

async function changeColor(color:GroupColors,groupId:number,userId:number) {
    await userGroupRepository.changeColor(color,groupId,userId)
}

async function acept(invitationId:number,userId:number) {
    await userGroupRepository.acept(invitationId)
}

async function reject(invitationId:number,userId:number) {
    await userGroupRepository.eraseById(invitationId)
}

async function exitGroup(groupId:number,userId:number) {
    await userGroupRepository.eraseBy_User_Group(groupId,userId)
    ifEmpty_deleteGroup(groupId)
}

async function ifEmpty_deleteGroup(groupId:number) {
    const members=await userGroupRepository.getAllInGroup(groupId)
    if(members.length===0){
        await groupRepository.erase(groupId)
    } 
}



export const userGroupService={
    addMember,get,changeColor,getPendent,acept,reject,exitGroup
}