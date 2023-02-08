import * as PURCHASE from "../database/purchaseDataQuery";

import { NewPurchaseData, PurchaseData } from "../types/Purchase";

async function getPurchaseDataUser(id: number): Promise<PurchaseData[]> {
  return await PURCHASE.getPurchaseDataUser(id);
}

async function createPurchaseDataUser(
  newInfos: NewPurchaseData
): Promise<PurchaseData> {
  return await PURCHASE.createPurchaseDataUser(newInfos);
}

async function updatePurchaseInfos(infos: PurchaseData): Promise<PurchaseData> {
  return PURCHASE.updatePurchaseInfos(infos);
}

async function deletePurchaseInfos(id: number) {
  return PURCHASE.deletePurchaseInfos(id);
}

export {
  getPurchaseDataUser,
  createPurchaseDataUser,
  updatePurchaseInfos,
  deletePurchaseInfos,
};
