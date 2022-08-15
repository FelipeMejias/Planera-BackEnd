import bcrypt from "bcrypt";
import { prisma } from "../../src/database";
import { UserData } from "../../src/services/userService";

export default async function userFactory(user: UserData) {
  return prisma.user.create({
    data: {
      ...user,
      password: bcrypt.hashSync(user.password, 10),
    },
  });
}
