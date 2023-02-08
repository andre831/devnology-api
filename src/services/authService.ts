import * as AUTH from "../database/authQuery";

async function login(userData: any) {
  const user = await AUTH.login(userData).then((res) => {
    if ((res = [])) {
      return [
        {
          authenticated: false,
        },
      ];
    }

    return res;
  });

  return user;
}

export { login };
