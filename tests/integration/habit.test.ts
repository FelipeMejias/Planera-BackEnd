import { faker } from "@faker-js/faker";
import supertest from "supertest";
import { app } from "../../src/app.js";

import habitDataFactory from "../factories/habitDataFactory.js";
import habitFactory from "../factories/habitFactory.js";
import tokenFactory from "../factories/tokenFactory.js";

const client=supertest(app)

describe("habit tests", () => {

it("should create habit", async() => {
    const token = await tokenFactory();
    const habitData=habitDataFactory()
    const response = await client.post('/habit').send(habitData).set("Authorization", `Bearer ${token}`)

    expect(response.status).toEqual(201);
  })

it("should return 1 habit", async() => {
    const token = await tokenFactory();
    const title=faker.animal.dog()
    habitFactory(title)
    const response = await client.get('/habit').set("Authorization", `Bearer ${token}`)
    expect(response.body.map((habit:any)=>(habit.title))).toContain(title)
  })
})