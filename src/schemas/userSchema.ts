import joi from 'joi'
import { UserData } from '../services/userService'

export const schema=joi.object<UserData>({
    name:joi.string().required(),
    password:joi.string().required()
})