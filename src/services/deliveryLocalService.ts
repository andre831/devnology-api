import * as DELIVERY from "../database/deliveryLocalQuery";

import { Local, NewLocal } from "../types/Delivery";

async function getLocal(userId: number): Promise<Local[]> {
  return await DELIVERY.getLocal(userId);
}

async function createLocal(newLocal: NewLocal): Promise<Local> {
  return await DELIVERY.createLocal(newLocal);
}

async function updateLocal(local: Local): Promise<Local> {
  return await DELIVERY.updateLocal(local);
}

export { getLocal, createLocal, updateLocal };
