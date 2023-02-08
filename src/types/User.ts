export interface NewUser {
  name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface UserAuth {
  email: string;
  password: string;
}
