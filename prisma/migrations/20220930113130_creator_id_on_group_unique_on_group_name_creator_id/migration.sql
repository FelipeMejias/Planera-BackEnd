/*
  Warnings:

  - A unique constraint covering the columns `[name,creatorId]` on the table `group` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `creatorId` to the `group` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "group" ADD COLUMN     "creatorId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "group_name_creatorId_key" ON "group"("name", "creatorId");

-- AddForeignKey
ALTER TABLE "group" ADD CONSTRAINT "group_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
