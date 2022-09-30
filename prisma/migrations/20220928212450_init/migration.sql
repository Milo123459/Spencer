-- CreateTable
CREATE TABLE "Reminder" (
    "discord_id" BIGINT NOT NULL,
    "message" TEXT NOT NULL,
    "remindAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reminder_pkey" PRIMARY KEY ("discord_id")
);
