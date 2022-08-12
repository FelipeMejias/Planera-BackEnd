import { groupRepository } from "../repositories/groupRepository.js"
import { userGroupRepository } from "../repositories/userGroupRepository.js"

async function post(data:any,userId:number) {
    await groupRepository.post(data,userId)
    const {id}=await groupRepository.findByName(data.name)
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