import { groupRepository } from "../repositories/groupRepository.js"
import { userGroupRepository } from "../repositories/userGroupRepository.js"

export type GroupData={
    name:string;
}

async function post(data:GroupData,userId:number) {
    await groupRepository.post(data,userId)
    const result=await groupRepository.findByName(data.name)
    const {id}=result[result.length-1]
    await userGroupRepository.insertCreator(id,userId)
}

async function getAll(userId:number) {
    const userGroups= await userGroupRepository.getGroups(userId)
    return userGroups.map(ug=>{
        const {group,color}=ug
        return {...group,color}
    })
}

async function get(id:number) {
    const result= await userGroupRepository.getAllInGroup(id)
    const {group}=result[0]
    const participants=result.map(userGroup=>{
        const {user}=userGroup
        delete user.password
        return user
    })
    return {group,participants}
}

export const groupService={
    post,getAll,get
}