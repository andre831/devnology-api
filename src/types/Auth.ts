import { User } from "./User";

export interface LoginRequestAuth {
  email: string;
  password: string;
}

export interface LoginAuthorized {
  token: string | null;
  auth: boolean;
  status: string;
}

export interface SignUpAuthorized {
  token: string | null;
  auth: boolean;
  user?: User;
  status: string;
}
