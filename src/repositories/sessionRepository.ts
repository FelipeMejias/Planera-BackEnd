import { Session } from "@prisma/client";
import { prisma } from "../database.js";

export type SessionData=Omit<Session,'id'>

async function post(data:SessionData) {
    await prisma.session.create({
        data
    })
}

async function getByToken(token:string) {
    return await prisma.session.findFirst({
        include:{
            user:true
        },
        where:{token}
    })
}


export const sessionRepository={
    post,getByToken
}