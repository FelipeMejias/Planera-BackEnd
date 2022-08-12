-- DropIndex
DROP INDEX "group_name_key";

-- CreateTable
CREATE TABLE "event" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "begin" TEXT NOT NULL,
    "end" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "floor" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userEvent" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,

    CONSTRAINT "userEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userEvent_userId_eventId_key" ON "userEvent"("userId", "eventId");

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userEvent" ADD CONSTRAINT "userEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userEvent" ADD CONSTRAINT "userEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
