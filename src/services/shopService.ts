import * as todo from "../database/shop/shopQuery";

function postCartFromUSer(id: string) {
  return todo.postCartFromUSer(id);
}

export { postCartFromUSer };
