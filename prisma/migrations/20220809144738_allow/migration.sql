/*
  Warnings:

  - You are about to drop the column `color` on the `group` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "group" DROP COLUMN "color";

-- AlterTable
ALTER TABLE "habit" ALTER COLUMN "color" SET DEFAULT 'blue';

-- AlterTable
ALTER TABLE "userGroup" ADD COLUMN     "color" TEXT NOT NULL DEFAULT 'orange';

-- CreateTable
CREATE TABLE "allow" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "allow_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "allow" ADD CONSTRAINT "allow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "allow" ADD CONSTRAINT "allow_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
