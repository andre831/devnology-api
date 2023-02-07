import * as USER from "../database/userQuery";

import { NewUser } from "../types/User";

async function getUser(id: number) {
  return USER.getUser(id);
}

async function createUser(newUser: NewUser) {
  return USER.createUser(newUser);
}

export { getUser, createUser };
