import { NewPurchaseData, PurchaseData } from "../types/Purchase";
import prisma from "./client";

async function getPurchaseDataUser(id: number): Promise<PurchaseData[]> {
  const data = await prisma.purchaseData.findMany({
    where: { id: id },
  });

  return data;
}

async function createPurchaseDataUser(
  newInfos: NewPurchaseData
): Promise<PurchaseData> {
  const createdPurchaseData = await prisma.purchaseData.create({
    data: {
      userId: newInfos.userId,
      name: newInfos.name,
      last_name: newInfos.last_name,
      document: newInfos.document,
      shopping_card: JSON.stringify(newInfos.shopping_card),
    },
  });

  return createdPurchaseData;
}

async function updatePurchaseInfos(infos: PurchaseData): Promise<PurchaseData> {
  const updatedInfos = await prisma.purchaseData.update({
    where: { id: infos.id },
    data: infos,
  });

  return updatedInfos;
}

async function deletePurchaseInfos(id: number) {
  const deletedInfos = await prisma.purchaseData.delete({
    where: { id: id },
  });

  return deletedInfos;
}

export {
  getPurchaseDataUser,
  createPurchaseDataUser,
  updatePurchaseInfos,
  deletePurchaseInfos,
};
