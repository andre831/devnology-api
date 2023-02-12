import * as AUTH from "../database/authQuery";

import jwt from "jsonwebtoken";
import { NewUser } from "../types/User";
import { UserAuthorized, LoginRequestAuth } from "../types/Auth";

const jwtSecret = "secret_key";

async function login(userData: LoginRequestAuth): Promise<UserAuthorized> {
  const user = await AUTH.login(userData);

  if (!user[0]) {
    return {
      token: null,
      auth: false,
      status: "Unathorized. Invalid Credentials",
    };
  } else {
    const token = jwt.sign({ id: user[0].id, email: user[0].email }, jwtSecret);

    return { token: token, auth: true, user: user[0], status: "Authorized" };
  }
}

async function signUp(newUser: NewUser): Promise<UserAuthorized> {
  const user = await AUTH.signUp(newUser);

  if (!user.id) {
    return {
      token: null,
      auth: false,
      status: "No loaded new user",
    };
  } else {
    const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret);

    return { token: token, auth: true, user: user, status: "Authorized" };
  }
}

export { login, signUp };
