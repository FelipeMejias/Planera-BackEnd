import bcrypt from "bcrypt";
import { prisma } from "../../src/database";
import { UserData } from "../../src/services/userService";
import habitDataFactory from "./habitDataFactory";

export default async function habitFactory(title:string) {
    const habitData=habitDataFactory()
     await prisma.habit.create({
        data: {
            ...habitData,title,
            userId:1,
            floor:20000,
            size:20000
        },
  });
}
