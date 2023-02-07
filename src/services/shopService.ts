import * as todo from "../database/shopQuery";

function postShopCart(id: number) {
  return todo.postShopCart(id);
}

export { postShopCart };
