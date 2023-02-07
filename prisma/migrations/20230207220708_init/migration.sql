-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeliveryLocal" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "way" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "cep" TEXT NOT NULL,

    CONSTRAINT "DeliveryLocal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseData" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "credit_card" TEXT NOT NULL,
    "document" TEXT NOT NULL,

    CONSTRAINT "PurchaseData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopCart" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_amount" INTEGER NOT NULL,
    "product_price" TEXT NOT NULL,

    CONSTRAINT "ShopCart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DeliveryLocal_userId_key" ON "DeliveryLocal"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseData_userId_key" ON "PurchaseData"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ShopCart_userId_key" ON "ShopCart"("userId");

-- AddForeignKey
ALTER TABLE "DeliveryLocal" ADD CONSTRAINT "DeliveryLocal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseData" ADD CONSTRAINT "PurchaseData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopCart" ADD CONSTRAINT "ShopCart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
