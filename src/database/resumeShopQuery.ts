import prisma from "./client";
import { NewResumeShop, ResumeShop } from "../types/Resume";

async function getResumeShop(userId: number): Promise<ResumeShop[]> {
  const resume = await prisma.resumeShop.findMany({
    where: { userId: userId },
  });

  return resume;
}

async function postResumeShop(infos: NewResumeShop): Promise<ResumeShop> {
  const itemsAsString = JSON.stringify(infos.items);

  infos.items = itemsAsString;

  console.log("infsssss", infos);

  const resume = await prisma.resumeShop.create({
    data: {
      userId: infos.userId,
      localId: infos.localId,
      purchaseId: infos.purchaseId,
      items: infos.items,
      total: infos.total,
    },
  });

  return resume;
}

export { getResumeShop, postResumeShop };
