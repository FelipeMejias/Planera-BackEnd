import joi from 'joi'
import { EventData } from '../services/eventService'

export const schema=joi.object<EventData>({
    title:joi.string().required(),
    day:joi.number().required(),
    begin:joi.string().required(),
    end:joi.string().required(),
    chosen:joi.array()
})