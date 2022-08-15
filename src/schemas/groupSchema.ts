import joi from 'joi'
import { GroupData } from '../services/groupService'

export const schema=joi.object<GroupData>({
    name:joi.string().required()
})