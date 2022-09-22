import { User } from "@prisma/client";
import { userRepository } from "../repositories/userRepository.js";
import bcrypt from 'bcrypt'
import {v1 as tokenGenerator} from 'uuid'
import { sessionRepository } from "../repositories/sessionRepository.js";

export type UserData=Omit<User,'id'>

async function signUp(data:UserData) {
    const conflictUser=await userRepository.findByName(data.name)
    if(conflictUser)throw{type:'conflict',message:'This username is already taken. Choose another one'}
    const SALT=10
    data.password=bcrypt.hashSync(data.password,SALT)
    await userRepository.insert(data)
}

async function signIn(data:UserData) {
    const user=await userRepository.findByName(data.name)
    if(!user || !bcrypt.compareSync(data.password,user.password))throw{type:'unauthorized',message:'Username or password incorrect'}
    const token=tokenGenerator()
    await sessionRepository.post({token,userId:user.id})
    return {token,user}
}

export const userService={
    signUp,signIn
}