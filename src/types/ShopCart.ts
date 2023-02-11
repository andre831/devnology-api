export interface ShopCart {
  id: number;
  userId: number;
  product_name: string;
  product_amount: number;
  product_price: string;
}

export interface NewShopCart {
  userId: number;
  product_name: string;
  product_amount: number;
  product_price: string;
}

export interface Product {
  name: string;
  price: string;
}
