import { faker } from "@faker-js/faker";
import supertest from "supertest";
import { app } from "../../src/app.js";

import { prisma } from "./../../src/database.js";
import userBodyFactory from "../factories/userDataFactory.js";
import userFactory from "../factories/userFactory.js";

const client=supertest(app)

describe("user tests", () => {

  it("should register", async () => {
    const userData = userBodyFactory()
    const response = await client.post("/signup").send(userData);
    expect(response.status).toBe(201)

    const user = await prisma.user.findUnique({
      where: { name: userData.name }
    });
    expect(user).not.toBeFalsy();
    });
    it("should signin", async () => {
        const userData = userBodyFactory()
        userFactory(userData)
        const response = await client.post("/signin").send(userData);
        expect(response.status).toBe(200)
        expect(response.body.token).not.toBeFalsy()
    })

})