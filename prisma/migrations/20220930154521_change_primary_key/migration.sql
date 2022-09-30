/*
  Warnings:

  - The primary key for the `Reminder` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Reminder" DROP CONSTRAINT "Reminder_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Reminder_pkey" PRIMARY KEY ("id");
