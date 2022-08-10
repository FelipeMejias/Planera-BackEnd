import { userGroupRepository } from "../repositories/userGroupRepository.js"
import { userRepository } from "../repositories/userRepository.js"

async function post(groupId:number,guest:string) {
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

async function put(invitationId:number,userId:number) {
    await userGroupRepository.acept(invitationId)
}

async function erase(invitationId:number,userId:number) {
    await userGroupRepository.erase(invitationId)
}

export const userGroupService={
    post,get,put,erase
}