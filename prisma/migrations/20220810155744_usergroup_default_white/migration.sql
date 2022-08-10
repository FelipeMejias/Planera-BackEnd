-- DropIndex
DROP INDEX "userGroup_userId_color_key";

-- AlterTable
ALTER TABLE "userGroup" ALTER COLUMN "color" SET DEFAULT 'white';
