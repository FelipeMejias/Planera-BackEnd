import { eventRepository } from "../repositories/eventRepository.js"
import { userEventRepository } from "../repositories/userEventRepository.js"
import { graphicMark } from "../utils/time_lenguage.js"

export type EventData={
    title:string;
    begin:string;
    end:string;
    day:number;
    chosen:number[];
}

async function post(data:EventData,groupId:number) {
    const {chosen,title}=data
    delete data.chosen
    const graphicData=graphicMark(data)
    graphicData.groupId=groupId
    await eventRepository.post(graphicData)
    const event:any=await eventRepository.findBy_groupId_title(title,groupId)
    const chosenData=chosen.map((userId:number)=>({userId,eventId:event.id}))
    await userEventRepository.insertMany(chosenData)
}

/* async function quest(data:EventData,groupId:number) {
    const {chosen}=data
    const graphicData=graphicMark(data)
    const x=0
    //const result=await eventRepository.quest(graphicData)
}
 */
async function getUserEvents(userId:number) {
    return await eventRepository.getMyEvents(userId)
}

async function eraseUserEvent(userId:number,eventId:number) {
    await userEventRepository.erase(userId,eventId)
    ifEmpty_deleteEvent
}

async function ifEmpty_deleteEvent(eventId:number) {
    const participants=await userEventRepository.getAllInEvent(eventId)
    if(participants.length===0){
        await eventRepository.erase(eventId)
    } 
}

async function getParticipants(eventId:number) {
    const result= await userEventRepository.getAllInEvent(eventId)
    return result.map(ue=>(ue.user.name))
}


export const eventService={
    post,getUserEvents,eraseUserEvent,getParticipants
}