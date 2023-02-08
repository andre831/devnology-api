import e from "express";
import prisma from "./client";

async function login(userData: any) {
  const user = await prisma.user.findMany({
    where: { email: userData.email, password: userData.email },
  });

  return user;
}

export { login };
