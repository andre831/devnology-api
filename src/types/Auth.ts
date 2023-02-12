import { User } from "./User";

export interface LoginRequestAuth {
  email: string;
  password: string;
}

export interface UserAuthorized {
  token: string | null;
  auth: boolean;
  user?: User;
  status: string;
}
