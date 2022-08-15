import { jest } from "@jest/globals";

import { faker } from "@faker-js/faker";
import { userGroupService } from "../../src/services/userGroupService";
import { userRepository } from "../../src/repositories/userRepository";
import { userGroupRepository } from "../../src/repositories/userGroupRepository";
import { userGroupIncludeGroupFactory, userGroupIncludeUserFactory } from "../factories/userGroupFactory";



describe("userGroup tests", () => {

  it("should add member to group", async () => {
    const fakeUser = {id:1,name:'hugo',password:'1234'}

    jest.spyOn(userRepository, "findByName").mockImplementation(async()=>fakeUser)
    jest.spyOn(userGroupRepository, "findBy_User_Group").mockImplementation(async()=>undefined)
    jest.spyOn(userGroupRepository, "insert").mockImplementation(async()=>{})

    await userGroupService.addMember(1,'hugo');
    expect(userGroupRepository.insert).toBeCalled();
  })

  it("should fail trying to add inexisting member", async () => {
    jest.spyOn(userRepository, "findByName").mockImplementation(async()=>undefined)

    const promise= userGroupService.addMember(1,'hugo');
    expect(promise).rejects.toEqual({type:'not found',message:`O usuário hugo não existe`});
  })

  it("should fail trying to add member already in group", async () => {
    const fakeUser = {id:1,name:'hugo',password:'1234'}
    const fakeUserGroup = {id:1,userId:1,groupId:1,acepted:false,color:'orange'}

    jest.spyOn(userRepository, "findByName").mockImplementation(async()=>fakeUser)
    jest.spyOn(userGroupRepository, "findBy_User_Group").mockImplementation(async()=>fakeUserGroup)

    const promise= userGroupService.addMember(1,'hugo');
    expect(promise).rejects.toEqual({type:'conflict',message:`O usuário hugo já está no grupo`});
  })

  it("should get empty invitation", async () => {
    jest.spyOn(userGroupRepository, "getFirstInvitation").mockImplementation(async()=>undefined)

    const {groupName,invitationId}=await userGroupService.get(1);
    expect(groupName).toBeFalsy()
    expect(invitationId).toBeFalsy()
  })

  it("should get first invitation", async () => {
    const fakeUserGroup = userGroupIncludeGroupFactory()
    jest.spyOn(userGroupRepository, "getFirstInvitation").mockImplementation(async()=>fakeUserGroup)

    const {groupName,invitationId}=await userGroupService.get(1);
    expect(groupName).toBe(fakeUserGroup.group.name)
    expect(invitationId).toBe(1)
  })

  it("should get pendent invitation", async () => {
    const fakeUserGroup = userGroupIncludeUserFactory()
    jest.spyOn(userGroupRepository, "getPendent").mockImplementation(async()=>[fakeUserGroup])

    const pendentNames=await userGroupService.getPendent(1);
    expect(pendentNames[0]).toBe(fakeUserGroup.user.name)
    expect(pendentNames.length).toBe(1)
  })


});
