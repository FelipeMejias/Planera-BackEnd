import {prisma} from '../database.js'
import { UserData } from '../services/userService.js';

async function insert(data:UserData) {
    await prisma.user.create({data})
}

async function findByName(name: string) {
    return await prisma.user.findUnique({
      where: {name}
    })
}

async function findById(id: number) {
    return await prisma.user.findUnique({
      where: {id}
    })
}

export const userRepository={
    insert,findByName,findById
}