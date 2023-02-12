import prisma from "./client";

import { Local, NewLocal } from "../types/Delivery";

async function getLocal(userId: number): Promise<Local[]> {
  const local = await prisma.deliveryLocal.findMany({ where: { userId } });

  return local;
}

async function createLocal(newLocal: NewLocal): Promise<Local> {
  const createdLocal = await prisma.deliveryLocal.create({
    data: {
      userId: newLocal.userId,
      way: newLocal.way,
      complement: newLocal.complement,
      cep: newLocal.cep,
    },
  });

  return createdLocal;
}

async function updateLocal(local: Local): Promise<Local> {
  const createdLocal = await prisma.deliveryLocal.update({
    where: { id: local.id },
    data: local,
  });

  return createdLocal;
}

export { getLocal, createLocal, updateLocal };
