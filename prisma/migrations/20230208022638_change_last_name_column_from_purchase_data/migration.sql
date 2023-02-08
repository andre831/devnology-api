/*
  Warnings:

  - You are about to drop the column `lastName` on the `PurchaseData` table. All the data in the column will be lost.
  - Added the required column `last_name` to the `PurchaseData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PurchaseData" DROP COLUMN "lastName",
ADD COLUMN     "last_name" TEXT NOT NULL;
