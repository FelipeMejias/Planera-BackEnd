import { faker } from "@faker-js/faker";
import {v1 as tokenGenerator}  from 'uuid'
import bcrypt from "bcrypt";
import { prisma } from "../../src/database";
import { UserData } from "../../src/services/userService";

export default async function tokenFactory() {
    const token=tokenGenerator()
    await prisma.session.create({
    data: {
        userId:1,
        token
    },
  });
  return token
}
