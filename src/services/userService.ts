import * as USER from "../database/userQuery";

import { NewUser, User } from "../types/User";

async function getUser(id: number): Promise<User[]> {
  return await USER.getUser(id);
}

async function createUser(newUser: NewUser): Promise<User> {
  return await USER.createUser(newUser);
}

export { getUser, createUser };
