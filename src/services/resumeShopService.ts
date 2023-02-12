import * as RESUME from "../database/resumeShopQuery";

import { NewResumeShop, ResumeShop } from "../types/Resume";

async function getResumeShop(userId: number): Promise<ResumeShop[]> {
  return await RESUME.getResumeShop(userId);
}

async function postResumeShop(infos: NewResumeShop): Promise<ResumeShop> {
  return await RESUME.postResumeShop(infos);
}

export { getResumeShop, postResumeShop };
