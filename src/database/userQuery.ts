import prisma from "./client";

import { NewUser, User } from "../types/User";

async function getUser(id: number): Promise<User[]> {
  const onlyUser = await prisma.user.findMany({ where: { id } });

  return onlyUser;
}

async function createUser(newUser: NewUser): Promise<User> {
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
