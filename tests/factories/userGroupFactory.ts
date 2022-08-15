import { faker } from "@faker-js/faker";

export  function userGroupIncludeGroupFactory() {
  return {
    id:1,
    userId:1,
    groupId:1,
    acepted:false,
    color:'orange',
    group:{
        id:1,name:faker.company.companyName()
    }};
}

export  function userGroupIncludeUserFactory() {
    return {
      id:1,
      userId:1,
      groupId:1,
      acepted:false,
      color:'orange',
      user:{
          id:1,name:faker.internet.userName(),password:'1234'
      }};
  }