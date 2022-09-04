import joi from 'joi'
import { EventData } from '../services/eventService'

const regex=/^([0-9]{2},[0-9]{2}|[0-9]{2}:[0-9]{2}|[0-9]{1},[0-9]{2}|[0-9]{1}:[0-9]{2}|[0-9]{2}|[0-9]{1})$/

export const schema=joi.object<EventData>({
    title:joi.string().required(),
    day:joi.number().required(),
    begin:joi.string().pattern(regex).required(),
    end:joi.string().pattern(regex).required(),
    chosen:joi.array()
})