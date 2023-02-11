import prisma from "./client";
import bcrypt from "bcryptjs";

import { NewUser, User } from "../types/User";

async function login(userData: any) {
  const user = await prisma.user.findMany({
    where: { email: userData.email },
  });

  const validPass = await bcrypt.compare(userData.password, user[0].password);

  if (!validPass) return [];

  return user;
}

async function signUp(newUser: NewUser): Promise<User> {
  const user = await prisma.user.create({
    data: {
      name: newUser.name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: await bcrypt.hash(newUser.password, 15),
    },
  });

  return user;
}

export { login, signUp };
