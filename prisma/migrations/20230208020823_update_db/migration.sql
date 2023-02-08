/*
  Warnings:

  - You are about to drop the column `credit_card` on the `PurchaseData` table. All the data in the column will be lost.
  - Added the required column `shopping_card` to the `PurchaseData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PurchaseData" DROP COLUMN "credit_card",
ADD COLUMN     "shopping_card" JSONB NOT NULL;
