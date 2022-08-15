import { faker } from "@faker-js/faker";

export default function userBodyFactory() {
  return {
    name: faker.internet.userName(),
    password: faker.internet.password(),
  };
}