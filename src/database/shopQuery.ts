import { PrismaClient } from "@prisma/client";
import { NewShopCart, ShopCart } from "../types/ShopCart";

const prisma = new PrismaClient();

async function getShopCart(userId: number): Promise<ShopCart[]> {
  const cart = await prisma.shopCart.findMany({
    where: { userId: userId },
  });

  console.log(cart);

  return cart;
}

async function postShopCart(product: NewShopCart): Promise<ShopCart> {
  const cart = await prisma.shopCart.create({
    data: {
      userId: product.userId,
      product_name: product.product_name,
      product_amount: product.product_amount,
      product_price: product.product_price,
    },
  });

  return cart;
}

async function updateShopCart(products: ShopCart): Promise<ShopCart> {
  const cart = await prisma.shopCart.update({
    where: { id: products.id },
    data: products,
  });

  return cart;
}

export { getShopCart, postShopCart, updateShopCart };
