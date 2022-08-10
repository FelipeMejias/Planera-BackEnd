/*
  Warnings:

  - A unique constraint covering the columns `[userId,color]` on the table `userGroup` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "userGroup" ALTER COLUMN "color" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "userGroup_userId_color_key" ON "userGroup"("userId", "color");
