import joi from 'joi'
import { AllowData } from '../services/allowService'

export const postSchema=joi.object<AllowData>({
    color:joi.string().required(),
    tag:joi.string()
})

export const getSchema=joi.object({
    chosen:joi.array()
})