import { faker } from "@faker-js/faker";

export default function habitDataFactory() {
  return {
    title: faker.internet.userName(),
    begin: '2,00',
    end:'4,00',
    day:3
  };
}
