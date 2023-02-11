import * as SHOP from "../database/shopQuery";
import { Product, ShopCart } from "../types/ShopCart";

async function getShopCart(userId: number) {
  const shopCart = await SHOP.getShopCart(userId);

  return shopCart;
}

async function postShopCart(products: { product: Product; amount: number }[]) {
  const postedProduct = products.map(async (product) => {
    const item = {
      userId: 1,
      product_name: product.product.name,
      product_amount: product.amount,
      product_price: product.product.price,
    };

    return await SHOP.postShopCart(item);
  });

  return postedProduct;
}

function updateShopCart(products: ShopCart) {
  return SHOP.postShopCart(products);
}

export { getShopCart, postShopCart, updateShopCart };
