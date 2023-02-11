import * as USER from "../database/userQuery";

import { User } from "../types/User";

async function getUser(id: number): Promise<User[]> {
  return await USER.getUser(id);
}

export { getUser };
