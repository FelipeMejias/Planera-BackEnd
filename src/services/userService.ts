import { User } from "@prisma/client";
import { userRepository } from "../repositories/userRepository.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export type UserData=Omit<User,'id'>

async function signUp(data:UserData) {
    const SALT=10
    data.password=bcrypt.hashSync(data.password,SALT)
    await userRepository.insert(data)
}

async function signIn(data:UserData) {
    const user=await userRepository.findByName(data.name)
    if(!user)throw{type:'not found'}
    if(!bcrypt.compareSync(data.password,user.password))throw{type:'unauthorized'}
    const token = jwt.sign({ userId: user.id },process.env.JWT_SECRET||'')
    return {token,user}
}

export const userService={
    signUp,signIn
}