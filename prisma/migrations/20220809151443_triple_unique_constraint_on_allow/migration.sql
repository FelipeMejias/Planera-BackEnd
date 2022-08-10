/*
  Warnings:

  - A unique constraint covering the columns `[userId,groupId,color]` on the table `allow` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "allow_userId_groupId_color_key" ON "allow"("userId", "groupId", "color");
