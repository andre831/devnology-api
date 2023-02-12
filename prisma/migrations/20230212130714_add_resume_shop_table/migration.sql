-- CreateTable
CREATE TABLE "ResumeShop" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "localId" INTEGER NOT NULL,
    "purchaseId" INTEGER NOT NULL,
    "items" TEXT NOT NULL,
    "total" TEXT NOT NULL,

    CONSTRAINT "ResumeShop_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ResumeShop" ADD CONSTRAINT "ResumeShop_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeShop" ADD CONSTRAINT "ResumeShop_localId_fkey" FOREIGN KEY ("localId") REFERENCES "DeliveryLocal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeShop" ADD CONSTRAINT "ResumeShop_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "PurchaseData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
