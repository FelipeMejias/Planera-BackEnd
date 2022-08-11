/*
  Warnings:

  - A unique constraint covering the columns `[userId,groupId]` on the table `userGroup` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "userGroup_userId_groupId_key" ON "userGroup"("userId", "groupId");
