import prisma from "./client";

import { NewUser } from "../types/User";

async function getUser(id: number) {
  const onlyUser = await prisma.user.findMany({ where: { id } });

  return onlyUser;
}

async function createUser(newUser: NewUser) {
  const user = await prisma.user.create({
    data: {
      name: newUser.name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
    },
  });

  return user;
}

export { getUser, createUser };
