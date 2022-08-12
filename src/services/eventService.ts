import { eventRepository } from "../repositories/eventRepository.js"
import { userEventRepository } from "../repositories/userEventRepository.js"
import { graphicMark } from "../utils/habitEventUtil.js"

async function post(data:any,groupId:number) {
    const {chosen,title}=data
    delete data.chosen
    const graphicData=graphicMark(data)
    graphicData.groupId=groupId
    await eventRepository.post(graphicData)
    const event:any=await eventRepository.findBy_groupId_title(title,groupId)
    const chosenData=chosen.map((userId:number)=>({userId,eventId:event.id}))
    await userEventRepository.insertMany(chosenData)
}

async function getUserEvents(userId:number) {
    return await userEventRepository.get(userId)
}

export const eventService={
    post,getUserEvents
}