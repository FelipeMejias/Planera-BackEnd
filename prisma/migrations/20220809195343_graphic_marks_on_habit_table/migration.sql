/*
  Warnings:

  - Added the required column `floor` to the `habit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `habit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "habit" ADD COLUMN     "floor" INTEGER NOT NULL,
ADD COLUMN     "size" INTEGER NOT NULL;
